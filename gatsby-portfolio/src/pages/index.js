import React from "react";

import scrollTo from "gatsby-plugin-smoothscroll";

import SEO from "../components/seo";
import FullBackground from "../components/imageComponents/backgroundImage";
import ContactForm from "../components/contactForm";

import { FaAngleDown} from "@react-icons/all-files/fa/FaAngleDown";

import "../main.scss";
import indexStyle from "./index.module.scss";
import backgroundImageStyle from "../components/imageComponents/backgroundImage.module.scss";

const IndexPage = () => {
	return (
		<div>
			<SEO id="top" title="Home" />
			<section>
				<FullBackground className={backgroundImageStyle.componentFlex}>
					<h1 className={`${indexStyle.title} align-center`}>Alex Carr</h1>
					<div className={`${indexStyle.iframeContainer} align-center`}>
						<iframe
							title="index-vid"
							className={indexStyle.iframeResponsive}
							src="https://www.youtube.com/embed/fIidcLH2Xeo"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
					<div className={`${indexStyle.iframeDesktop} align-center`}>
						<iframe
							title="index-vid"
							className={indexStyle.iframeFullSize}
							width='840'
							height='472'
							src="https://www.youtube.com/embed/fIidcLH2Xeo"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
					<div
						className={`${indexStyle.seeMoreWrapper}`}
						role="link"
						onClick={() => scrollTo("#scroll-about")}
					>
						<h3 className={`${indexStyle.info} align-center`}>See More</h3>
						<FaAngleDown className={`${indexStyle.infoIcon} align-center`} />
					</div>
				</FullBackground>

				<FullBackground
					className={`${backgroundImageStyle.componentBlock} ${backgroundImageStyle.colorInverse}`}
				>
					<div className="pageContainer">
						<div id="scroll-about">
							<h2 className={`${indexStyle.sectionTitle}`}>Bio</h2>
						</div>
						<p className={indexStyle.aboutText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros. Ultricies
							integer quis auctor elit sed vulputate mi sit. Sit amet massa vitae tortor. Pretium aenean
							pharetra magna ac placerat vestibulum lectus mauris ultrices. Vitae suscipit tellus mauris a
							diam maecenas sed enim. Faucibus ornare suspendisse sed nisi lacus. Leo duis ut diam quam
							nulla porttitor massa id neque. Condimentum id venenatis a condimentum vitae sapien
							pellentesque habitant. Tortor condimentum lacinia quis vel eros donec. Egestas fringilla
							phasellus faucibus scelerisque eleifend donec pretium. Elementum nibh tellus molestie nunc
							non blandit massa enim. Habitant morbi tristique senectus et netus. Tristique nulla aliquet
							enim tortor at.
						</p>
					</div>
				</FullBackground>
				<FullBackground className={`${backgroundImageStyle.componentBlock} ${backgroundImageStyle.colorRotate2}`}>
					<div id="scroll-projects">
						<h2 className={`${indexStyle.sectionTitle}`}>Featured Works</h2>
					</div>
					<div className={indexStyle.projectsWrapper}></div>
				</FullBackground >
				<FullBackground
					className={`${backgroundImageStyle.componentFlex} ${backgroundImageStyle.colorRotate}`}
				>
					<div className="pageContainer">
						<div id="scroll-contact">
							<h2 className={`${indexStyle.sectionTitle} text-center`}>Contact Me</h2>
						</div>
						<div>
							<ContactForm />
						</div>
					</div>
				</FullBackground>
			</section>
		</div>
	);
};

export default IndexPage;
