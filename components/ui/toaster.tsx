'use client';

import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(function ({ id, title, description, action, ...props }) {
				return (
					<Toast
						key={id}
						{...props}
						className="border-[#e0e0e2] bg-dark-200 dark:border-[#121212] dark:bg-light-800"
					>
						<div className="invert-text grid gap-1">
							{title && <ToastTitle>{title}</ToastTitle>}
							{description && (
								<ToastDescription>{description}</ToastDescription>
							)}
						</div>
						{action}
						<ToastClose className="bg-light-800 text-dark-200 dark:bg-dark-200 dark:text-light-800" />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}
