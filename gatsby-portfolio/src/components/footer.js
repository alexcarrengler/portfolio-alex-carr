import React from "react";
import { Link } from "gatsby";

import footerStyles from "./footer.module.scss";

export default function footer() {
	return (
		<footer className={footerStyles.container}>
			<span>
				Alex Carr &copy;{" "}
				<a href="/admin/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
					Admin
				</a>
			</span>
			<span>
				Site by{" "}
				<a className={footerStyles.a} href="https://milesgrossenbacher.com/">
					Miles Grossenbacher
				</a>
			</span>
		</footer>
	);
}
