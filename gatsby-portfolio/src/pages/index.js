import React, {useState} from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import scrollTo from "gatsby-plugin-smoothscroll";

import SEO from "../components/seo";
import FullBackground from "../components/imageComponents/backgroundImage";
import SocialLinks from "../components/socialLinks";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";

import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";

//cms content
import IntroContent from "../../site/home-page/intro-section.json";
import BioContent from "../../site/home-page/bio-section.json";

import "../main.scss";
import indexStyle from "./index.module.scss";
import projectsStyles from "./projects.module.scss";
import backgroundImageStyle from "../components/imageComponents/backgroundImage.module.scss";

const IndexPage = ({ data }) => {

	const [loaded, setLoaded] = useState(false);

	const toggleLoad = () => {
		setLoaded(true);
		console.log(`toggleLoad`);
	}

	setTimeout(function(){
		toggleLoad();
		console.log(`timeout toggleLoad`);
	}, 1000);

	const projects = data.allMarkdownRemark.edges;
	// console.log(projects);
	const posts = projects.filter((p) => p.node.frontmatter.featured);
	const filteredPosts = posts.map((p) => (
		<div key={p.node.frontmatter.title} className={`${projectsStyles.projectWrapper}`}>
			<Link to={`/post/${p.node.fields.slug}`} className={`${projectsStyles.projectLink}`}>
				<Img fluid={p.node.frontmatter.post_image.childImageSharp.fluid} className={projectsStyles.thumbnail} />
				<p className={projectsStyles.projectTitle}>{p.node.frontmatter.title}</p>
			</Link>
		</div>
	));
	return (
		<div>
			<SEO id="top" title="Home" />
			<section>
				<div className={indexStyle.introSection}>
					<div className={indexStyle.titleWrapper}>
						<h1 className={loaded ? `${indexStyle.title} align-center ${indexStyle.show}`: `${indexStyle.title} align-center`}>{IntroContent.site_title}</h1>
						<p className={loaded ? `${indexStyle.subTitle} ${indexStyle.show}`: `${indexStyle.subTitle} `}>{IntroContent.site_subtitle}</p>
					</div>
					<div className={`${indexStyle.iframeContainer} align-center`}>
						<iframe
							title="index-vid"
							className={ loaded ? `${indexStyle.iframeResponsive} ${indexStyle.show}`: `${indexStyle.iframeResponsive}`}
							src={IntroContent.intro_video_src}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							onLoad={toggleLoad}
						/>
					</div>
					<div className={`${indexStyle.iframeDesktop} align-center`}>
						<iframe
							title="index-vid"
							className={ loaded ? `${indexStyle.iframeFullSize} ${indexStyle.show}`: `${indexStyle.iframeFullSize}`}
							width="840"
							height="472"
							src={IntroContent.intro_video_src}
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
						<FaAngleDown className={`${indexStyle.infoIcon} align-center`} />
					</div>
				</div>

				<div id="scroll-about" className={indexStyle.bioSection}>
					<div className="pageContainer">
						<div>
							<h2 className={`${indexStyle.sectionTitle} ${indexStyle.bioSectionTitle}`}>
								{BioContent.section_title}
							</h2>
						</div>
						<p className={indexStyle.aboutText}>{BioContent.bio_text}</p>
						{/* <SocialLinks /> */}
					</div>
				</div>
				<div className={indexStyle.projectsSection}>
					<div id="scroll-projects">
						<h2 className={`${indexStyle.sectionTitle}`}>Featured Works</h2>
						<div className={`${projectsStyles.projectsContainer}`}>
							{filteredPosts}
							{filteredPosts.length % 2 === 0 ? <></> : <div className={`${projectsStyles.projectWrapper}`} style={{minHeight: `0px`,maxHeight: `0px !important`}}></div>}
						</div>
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

export const featuredPosts = graphql`
	query featuredQuery {
		allMarkdownRemark(sort: {fields: frontmatter___updated_at}){
			edges {
				node {
					frontmatter {
						title
						updated_at
          				featured
						post_image {
							childImageSharp {
								fluid{
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default IndexPage;
