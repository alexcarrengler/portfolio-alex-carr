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
				<a className={footerStyles.a} href="https://www.linkedin.com/in/miles-grossenbacher-908b171a3/">
					Miles Grossenbacher
				</a>
			</span>
		</footer>
	);
}
