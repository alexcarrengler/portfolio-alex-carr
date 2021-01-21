import React from "react";

import SEO from "../components/seo";
import FullBackground from "../components/backgroundImage";

import indexStyle from "./index.module.scss";
import backgroundImageStyle from "../components/backgroundImage.module.scss";

const IndexPage = () => (
	<div>
		<SEO title="Home" />
		<section>
			<FullBackground className={backgroundImageStyle.componentFlex}>
				<h1 className={backgroundImageStyle.title}>Alex Carr</h1>
				<div className={indexStyle.iframeContainer}>
					<iframe
						title="index-vid"
						className={indexStyle.iframeResponsive}
						src="https://www.youtube.com/embed/fIidcLH2Xeo"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			</FullBackground>

			<FullBackground className={backgroundImageStyle.componentInverse} />
		</section>
	</div>
);

export default IndexPage;
