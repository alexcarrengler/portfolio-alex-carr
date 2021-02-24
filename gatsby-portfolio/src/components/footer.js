import React from 'react'

import footerStyles from "./footer.module.scss";

export default function footer() {
    return (
            <footer className={footerStyles.container}>
                <span>Alex Carr &copy;</span>
                <span>Site by <a className={footerStyles.a} href="https://www.linkedin.com/in/miles-grossenbacher-908b171a3/">Miles Grossenbacher</a></span>
            </footer>
    )
}
