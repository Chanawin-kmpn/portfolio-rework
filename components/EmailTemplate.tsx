import { EmailTemplateProps } from '@/types/types';
import React from 'react';

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	username,
	email,
	subject,
	message,
}) => {
	return (
		<div>
			<h1>From : {username}</h1>
			<h2>Email : {email}</h2>
			<h3>Subject : {subject}</h3>
			<p>{message}</p>
		</div>
	);
};

export default EmailTemplate;
