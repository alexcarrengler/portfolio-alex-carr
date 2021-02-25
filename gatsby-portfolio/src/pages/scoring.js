import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

import "../main.scss";
import pageStyles from "./index.module.scss";
import projectsStyles from "./projects.module.scss";

import TestImage from "../images/thumbnails/scoring/000_scoring-th.png";

const projects = [
	{
		link: ``,
		thumbnailTitle: `project1`,
		thumbnailImage: `${TestImage}`,
		title: `The Grove`,
		image: `${TestImage}`,
		credits: `Will Kahn, Alex Carr`,
		projectDescription: ``,
		personalDescription: ``
	}
];

const Scoring = () => {
	const posts = projects.map((p) => (
		<div className={`${projectsStyles.projectWrapper}`}>
			<Link to={`/`} state={{ post: p }} className={`${projectsStyles.projectLink}`}>
				<img className={projectsStyles.thumbnail} src={p.thumbnailImage} />
				<p className={projectsStyles.projectTitle}>{p.thumbnailTitle}</p>
			</Link>
		</div>
	));

	return (
		<div className={projectsStyles.page} style={{ backgroundColor: `rgb(172, 196, 196)` }}>
			<SEO id="top" title="Scoring" />
			<section>
				<h1 className={`${pageStyles.title} ${projectsStyles.pageTitle}`}>Scoring</h1>
				<div className={`${projectsStyles.projectsContainer}`}>
					<div className={`${projectsStyles.projectWrapper}`}>{posts}</div>
				</div>
			</section>
		</div>
	);
};

export default Scoring;
