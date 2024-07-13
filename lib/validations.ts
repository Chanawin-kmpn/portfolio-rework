import { z } from 'zod';

export const ContactSchema = z.object({
	username: z.string().min(5).max(50),
	subject: z.string().min(5).max(200),
	message: z.string().min(100),
	email: z.string().email({ message: 'Invalid email address' }),
});
