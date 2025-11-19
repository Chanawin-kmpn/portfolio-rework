"use client";

import React, { useEffect, useRef, useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

type Sender = "user" | "bot";

type ChatMessage = {
	id: number;
	sender: Sender;
	text: string;
	createdAt: Date;
};

const MAX_QUESTIONS = 6;

const ChatBot: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([
		{
			id: 1,
			sender: "bot",
			text: "สวัสดีครับ! ผมคือผู้ช่วยแนะนำ Portfolio ของ Chanawin\nคุณสามารถถามเกี่ยวกับโปรเจกต์ สกิล หรือเครื่องมือที่ใช้ได้เลย 🙂",
			createdAt: new Date(),
		},
	]);
	const [input, setInput] = useState("");
	const [unreadCount, setUnreadCount] = useState(1);
	const [isSending, setIsSending] = useState(false);
	const [questionCount, setQuestionCount] = useState(0);

	const messagesEndRef = useRef<HTMLDivElement | null>(null);
	const nextIdRef = useRef(2);

	// scroll ลงล่างเมื่อมีข้อความใหม่และ popover เปิด
	useEffect(() => {
		if (!open) return;
		const timeout = setTimeout(() => {
			messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 50);
		return () => clearTimeout(timeout);
	}, [messages, open]);

	const handleOpenChange = (value: boolean) => {
		setOpen(value);
		if (value) setUnreadCount(0);
	};

	// 🔧 ให้ addMessage คืนค่า id ของ message ที่สร้าง
	const addMessage = (sender: Sender, text: string): number => {
		const id = nextIdRef.current++;
		setMessages((prev) => [
			...prev,
			{
				id,
				sender,
				text,
				createdAt: new Date(),
			},
		]);
		return id;
	};

	// 🔧 callChatApi ใช้ onUpdate update ข้อความแบบ streaming
	const callChatApi = async (
		message: string,
		onUpdate: (partial: string) => void
	): Promise<string> => {
		const res = await fetch("/api/chat", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message }),
		});

		if (!res.ok || !res.body) {
			const text = await res.text().catch(() => "");
			console.error("Chat API error:", res.status, text);
			throw new Error("Chat API error");
		}

		const reader = res.body.getReader();
		const decoder = new TextDecoder();
		let fullText = "";

		while (true) {
			const { value, done } = await reader.read();
			if (done) break;
			const chunk = decoder.decode(value, { stream: true });
			fullText += chunk;
			onUpdate(fullText); // อัปเดตข้อความบอทตาม progress
		}

		return fullText;
	};

	const handleSend = async () => {
		const trimmed = input.trim();
		if (!trimmed || isSending) return;

		// ✅ เช็ก limit ก่อนเรียก API
		if (questionCount >= MAX_QUESTIONS) {
			addMessage(
				"bot",
				"วันนี้คุณถามครบจำนวนที่กำหนดแล้วครับ ไว้ลองใหม่วันหลังได้เลยนะ 😊"
			);
			if (!open) setUnreadCount((c) => c + 1);
			return;
		}

		// ยังไม่เกิน limit → ส่งได้
		addMessage("user", trimmed);
		setInput("");
		setQuestionCount((c) => c + 1);

		try {
			setIsSending(true);

			// 🔧 สร้าง bubble ของบอทว่าง ๆ ไว้ก่อน แล้วอัปเดต text ทีหลังจาก stream
			const botId = addMessage("bot", "");

			await callChatApi(trimmed, (partial) => {
				setMessages((prev) =>
					prev.map((m) => (m.id === botId ? { ...m, text: partial } : m))
				);
			});

			if (!open) {
				setUnreadCount((c) => c + 1);
			}
		} catch (err) {
			console.error(err);
			addMessage(
				"bot",
				"ขอโทษครับ ระบบเจอปัญหาในการเชื่อมต่อ ลองใหม่อีกครั้งได้ไหมครับ"
			);
			if (!open) setUnreadCount((c) => c + 1);
		} finally {
			setIsSending(false);
		}
	};

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	const hasUnread = unreadCount > 0 && !open;

	return (
		<div className="fixed bottom-6 right-6 z-[999999]">
			<Popover open={open} onOpenChange={handleOpenChange}>
				<PopoverTrigger asChild>
					<button
						type="button"
						className="relative flex items-center justify-center focus:outline-none"
					>
						{/* ping effect */}
						{hasUnread && (
							<>
								<span className="bg-gradient absolute inline-flex size-20 animate-ping rounded-full opacity-40" />
								<span className="bg-gradient absolute inline-flex size-16 animate-pulse rounded-full opacity-70" />
							</>
						)}

						<div className="bg-gradient relative size-20 rounded-full p-4 shadow-lg shadow-black/30">
							<Image
								src="/assets/icons/chat-bot.svg"
								alt="Chat bot"
								fill
								sizes="80px"
								className="object-contain"
							/>
							{hasUnread && (
								<div className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-pink-500 px-1 text-xs font-bold text-white shadow-md">
									{unreadCount > 9 ? "9+" : unreadCount}
								</div>
							)}
						</div>
					</button>
				</PopoverTrigger>

				<PopoverContent
					align="end"
					className="w-[320px] border border-zinc-800 bg-zinc-950/95 p-0 text-zinc-50 shadow-xl shadow-black/40 sm:w-[360px]"
				>
					{/* Header */}
					<div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
						<div className="flex items-center gap-2">
							<div className="bg-gradient size-7 rounded-full p-[2px]">
								<div className="flex size-full items-center justify-center rounded-full bg-zinc-950 text-xs">
									CK
								</div>
							</div>
							<div className="flex flex-col">
								<span className="text-xs font-semibold tracking-wide">
									Portfolio Assistant
								</span>
								<span className="text-[10px] text-zinc-400">
									ถามเกี่ยวกับโปรเจกต์ & ประสบการณ์ได้เลย
								</span>
							</div>
						</div>
					</div>

					{/* Messages */}
					<ScrollArea className="h-72 p-3">
						<div className="flex flex-col gap-2 text-xs">
							{messages.map((m) => (
								<div
									key={m.id}
									className={`flex ${
										m.sender === "user" ? "justify-end" : "justify-start"
									}`}
								>
									<div
										className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3 py-2 ${
											m.sender === "user"
												? "bg-gradient rounded-br-sm text-white"
												: "rounded-bl-sm bg-zinc-800/80 text-zinc-50"
										}`}
									>
										{m.text}
									</div>
								</div>
							))}
							<div ref={messagesEndRef} />
						</div>
					</ScrollArea>

					{/* Input */}
					<div className="border-t border-zinc-800 px-3 py-2">
						<div className="flex items-center gap-2">
							<Input
								placeholder="พิมพ์ข้อความของคุณ..."
								className="h-8 border-zinc-700 text-xs text-dark-200 focus-visible:ring-0 focus-visible:ring-offset-0"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleKeyDown}
								disabled={isSending}
							/>
							<Button
								size="icon"
								className="bg-gradient size-8 w-fit px-4 text-xs font-semibold hover:opacity-90 disabled:opacity-60"
								onClick={handleSend}
								disabled={isSending}
							>
								{isSending ? "..." : "Send"}
							</Button>
						</div>
						<p className="mt-1 text-[10px] text-zinc-500">
							ข้อมูลตอบจาก Astra Vector Store + OpenAI (streaming)
						</p>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default ChatBot;
