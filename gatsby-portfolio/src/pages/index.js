import React from "react";

import SEO from "../components/seo";
import FullBackground from "../components/backgroundImage";

import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";

import indexStyle from "./index.module.scss";
import backgroundImageStyle from "../components/backgroundImage.module.scss";

const IndexPage = () => (
	<div>
		<SEO title="Home" />
		<section>
			<FullBackground className={backgroundImageStyle.componentFlex}>
				<h1 className={`${indexStyle.title} flex-center`}>Alex Carr</h1>
				<div className={`${indexStyle.iframeContainer} flex-center`}>
					<iframe
						title="index-vid"
						className={indexStyle.iframeResponsive}
						src="https://www.youtube.com/embed/fIidcLH2Xeo"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
        <h3 className={`${indexStyle.info} flex-center`}>See More</h3>
        <FaAngleDown className="flex-center"/>
			</FullBackground>

			<FullBackground className={backgroundImageStyle.componentInverse} />
		</section>
	</div>
);

export default IndexPage;
