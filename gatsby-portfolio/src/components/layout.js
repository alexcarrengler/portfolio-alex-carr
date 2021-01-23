import React from "react";
import PropTypes from "prop-types";

import Header from "./header";

import "../main.scss";

const Layout = ({ children }) => {
	return (
		<div>
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
