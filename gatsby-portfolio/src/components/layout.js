import React from "react";
import PropTypes from "prop-types";

import Header from "./header";

import "../main.scss";
import layoutStyle from "./layout.module.scss"

const Layout = ({ children }) => {
	return (
		<div className={layoutStyle.container}>
			<Header />
			<div>
				<main>{children}</main>
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
