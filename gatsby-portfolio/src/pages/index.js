import React from "react";

import scrollTo from "gatsby-plugin-smoothscroll";

import SEO from "../components/seo";
import FullBackground from "../components/backgroundImage";
import ContactForm from "../components/contactForm";

import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";

import indexStyle from "./index.module.scss";
import backgroundImageStyle from "../components/backgroundImage.module.scss";

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
					<div
						className={`${indexStyle.seeMoreWrapper}`}
						role="link"
						onClick={() => scrollTo("#scroll-about")}
					>
						<h3 className={`${indexStyle.info} align-center`}>See More</h3>
						<FaAngleDown className="align-center" style={{ fontSize: "32px" }} />
					</div>
				</FullBackground>

				<FullBackground className={`${backgroundImageStyle.componentBlock} ${backgroundImageStyle.colorInverse}`}>
					<div id="scroll-about">
						<h2 className={`${indexStyle.sectionTitle}`}>Hello!</h2>
					</div>
					<p className={indexStyle.aboutText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros. Ultricies
						integer quis auctor elit sed vulputate mi sit. Sit amet massa vitae tortor. Pretium aenean
						pharetra magna ac placerat vestibulum lectus mauris ultrices. Vitae suscipit tellus mauris a
						diam maecenas sed enim. Faucibus ornare suspendisse sed nisi lacus. Leo duis ut diam quam nulla
						porttitor massa id neque. Condimentum id venenatis a condimentum vitae sapien pellentesque
						habitant. Tortor condimentum lacinia quis vel eros donec. Egestas fringilla phasellus faucibus
						scelerisque eleifend donec pretium. Elementum nibh tellus molestie nunc non blandit massa enim.
						Habitant morbi tristique senectus et netus. Tristique nulla aliquet enim tortor at.
					</p>
				</FullBackground>
				<FullBackground className={`${backgroundImageStyle.componentBlock} ${backgroundImageStyle.colorRotate2}`}>
					<div id="scroll-projects">
						<h2 className={`${indexStyle.sectionTitle}`}>Projects</h2>
					</div>
					<div className={indexStyle.projectsWrapper}></div>
				</FullBackground >
				<FullBackground className={`${backgroundImageStyle.componentBlock} ${backgroundImageStyle.colorRotate}`}>
					<div id="scroll-contact">
						<h2 className={`${indexStyle.sectionTitle}`}>Contact</h2>
					</div>
					<div>
						<ContactForm />
					</div>
				</FullBackground>
			</section>
		</div>
	);
};

export default IndexPage;
