import React from "react";

import scrollTo from "gatsby-plugin-smoothscroll";

import SEO from "../components/seo";
import FullBackground from "../components/imageComponents/backgroundImage";
import SocialLinks from "../components/socialLinks";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";

import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";

//cms content
import IntroContent from "../../site/home-page/intro-section.json";

import "../main.scss";
import indexStyle from "./index.module.scss";
import backgroundImageStyle from "../components/imageComponents/backgroundImage.module.scss";

const IndexPage = () => {
	return (
		<div>
			<SEO id="top" title="Home" />
			<section>
				<div className={indexStyle.introSection}>
					<div className={indexStyle.titleWrapper}>
						<h1 className={`${indexStyle.title} align-center`}>{IntroContent.site_title}</h1>
						<p className={indexStyle.subTitle}>{IntroContent.site_subtitle}</p>
					</div>
					<div className={`${indexStyle.iframeContainer} align-center`}>
						<iframe
							title="index-vid"
							className={indexStyle.iframeResponsive}
							src={IntroContent.intro_video_src}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
					<div className={`${indexStyle.iframeDesktop} align-center`}>
						<iframe
							title="index-vid"
							className={indexStyle.iframeFullSize}
							width="840"
							height="472"
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
				</div>

				<div id="scroll-about" className={indexStyle.bioSection}>
					<div className="pageContainer">
						<div>
							<h2 className={`${indexStyle.sectionTitle} ${indexStyle.bioSectionTitle}`}>Bio</h2>
						</div>
						<p className={indexStyle.aboutText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros. Ultricies
							integer quis auctor elit sed vulputate mi sit. Sit amet massa vitae tortor. Pretium aenean
							pharetra magna ac placerat vestibulum lectus mauris ultrices. Vitae suscipit tellus mauris a
							diam maecenas sed enim. Faucibus ornare suspendisse sed nisi lacus. Leo duis ut diam quam
							nulla porttitor massa id neque. Condimentum id venenatis a condimentum vitae sapien
							pellentesque habitant.diam maecenas sed enim. Faucibus ornare suspendisse sed nisi lacus.
							Leo duis ut diam quam nulla porttitor massa id neque. Condimentum id venenatis a condimentum
							vitae sapien pellentesque habitant.
						</p>
						{/* <SocialLinks /> */}
					</div>
				</div>
				<div className={indexStyle.projectsSection}>
					<div id="scroll-projects">
						<h2 className={`${indexStyle.sectionTitle}`}>Featured Works</h2>
					</div>
					<div className={indexStyle.projectsWrapper} />
				</div>
				<div id="scroll-contact" className={indexStyle.contactSection}>
					<div className="pageContainer">
						<div>
							<h2 className={`${indexStyle.sectionTitle} ${indexStyle.bioSectionTitle}`}>Contact Me</h2>
						</div>
						<div>
							<ContactForm />
						</div>
					</div>
				</div>
				<Footer />
			</section>
		</div>
	);
};

export default IndexPage;
