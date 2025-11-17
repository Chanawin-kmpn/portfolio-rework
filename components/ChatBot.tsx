import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

const ChatBot = () => {
	return (
		<div className="fixed bottom-6 right-6 z-[999999]">
			<Popover>
				<PopoverTrigger>
					<div className="bg-gradient relative size-20 rounded-full p-4">
						<Image
							src="/assets/icons/chat-bot.svg"
							alt="Chat bot"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-contain"
						/>
					</div>
				</PopoverTrigger>
				<PopoverContent align="end" className="top-0">
					Place content for the popover here.
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default ChatBot;
