import EmailTemplate from '@/components/EmailTemplate';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	const json = req.json();
	const { username, email, subject, message } = await json;
	try {
		const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: 'chanawin.k@gmail.com',
			subject: subject,
			react: EmailTemplate({
				username,
				email,
				subject,
				message,
			}) as React.ReactElement,
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
