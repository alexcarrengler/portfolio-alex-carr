import React from "react";

import formStyle from "./contactForm.module.scss";

export default function contactForm() {

	return (
		<div>
			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<input type="hidden" name="form-name" value="contact" />
				<input name="name" type="text" className={formStyle.feedbackInput} placeholder="Name" />
				<input name="email" type="text" className={formStyle.feedbackInput} placeholder="Email" />
				<textarea
					name="text"
					className={formStyle.feedbackInput}
					placeholder="Message"
				/>
                <input type="submit" value="Send"/>
			</form>
		</div>
	);
}
