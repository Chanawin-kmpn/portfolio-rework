'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { ContactSchema } from '@/lib/validations';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const ContactForm = () => {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof ContactSchema>>({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			username: '',
			email: '',
			subject: '',
			message: '',
		},
	});

	async function onSubmit(values: z.infer<typeof ContactSchema>) {
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				body: JSON.stringify({
					username: values.username,
					email: values.email,
					subject: values.subject,
					message: values.message,
				}),
			});

			if (response.ok) {
				console.log('Message has been send to Chanawin!');
			}

			toast({
				title: 'Your message has been send!.',
				description:
					'Thank you for contacting me. I will reply to you as soon as possible. 🙏',
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex-column gap-4"
			>
				<div className="flex-column gap-4 xl:flex-row xl:gap-16">
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel className="paragraph-bold">Name:</FormLabel>
								<FormControl>
									<Input
										className="input"
										placeholder="Enter your name or company..."
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel className="paragraph-bold">Email:</FormLabel>
								<FormControl>
									<Input
										type="email"
										className="input"
										placeholder="Enter your email..."
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel className="paragraph-bold">Subject:</FormLabel>
							<FormControl>
								<Input
									className="input"
									placeholder="Enter your subject..."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel className="paragraph-bold">Message:</FormLabel>
							<FormControl>
								<Textarea
									className="input min-h-[300px]"
									placeholder="Enter your message..."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="gradient-btn">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default ContactForm;
