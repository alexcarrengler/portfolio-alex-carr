import React, { useState } from "react";
import {Link} from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";
import { FaHome } from "@react-icons/all-files/fa/FaHome";

import NavImg from "../components/imageComponents/headerImage";
import headerStyle from "../components/header.module.scss";

export default function Header() {
	const [ toggled, setToggled ] = useState(false);

	const toggleOverlay = () => {
		setToggled((toggled) => {
			// console.log("toggled");
			return !toggled;
		});
	}

	return (
		<div>
			<div id="top" />
			<header className={headerStyle.component}>
				<div className={
							toggled ? `${headerStyle.navSlider} ${headerStyle.navOpen}` : `${headerStyle.navSlider}`
						}>
					<ul className={headerStyle.navLinks} style={{borderBottom: `3px solid white`}}>
						<li className={headerStyle.listItem}><Link onClick={toggleOverlay} className={headerStyle.navLink} to="/"><FaHome/></Link></li>
						<li className={headerStyle.listItem}><Link onClick={toggleOverlay} className={headerStyle.navLink} to="/#scroll-about">Bio</Link></li>
						<li className={headerStyle.listItem}><Link onClick={toggleOverlay} className={headerStyle.navLink} to="/#scroll-projects">Featured Works</Link></li>
						<li className={headerStyle.listItem}><Link onClick={toggleOverlay} className={headerStyle.navLink} to="/#scroll-contact">Contact</Link></li>
					</ul>
					{/* <h4 className={headerStyle.navLabelWrapper}><span className={headerStyle.navLabel}>Portfolio</span></h4> */}
					<ul className={headerStyle.navLinks} style={{marginTop: `8px`}}>
						<li className={headerStyle.listItem}><Link onClick={toggleOverlay} className={headerStyle.navLink} to="/scoring">Scoring</Link></li>
						<li className={headerStyle.listItem}><Link onClick={toggleOverlay} className={headerStyle.navLink} to="/production">Production</Link></li>
						<li className={headerStyle.listItem}><Link onClick={toggleOverlay} className={headerStyle.navLink} to="/performance">Performance</Link></li>
					</ul>	
				</div>
				<nav className={headerStyle.nav}>
					<div className={headerStyle.imgContainer} role="link" onClick={() => scrollTo("#top")}>
						{/* <img src={navImg} alt="nav img" className={headerStyle.img} /> */}
						<NavImg />
						<div className={headerStyle.middle}>
							<div className={headerStyle.text}>
								<FaAngleUp />
							</div>
						</div>
					</div>
					<div
						className={
							toggled ? `${headerStyle.hamburger} ${headerStyle.isActive}` : `${headerStyle.hamburger}`
						}
						onClick={() => {
							toggleOverlay();
						}}
					>
						<div className={headerStyle.hamburgerLine} />
						<div className={headerStyle.hamburgerLine} />
						<div className={headerStyle.hamburgerLine} />
					</div>
				</nav>
					
			</header>
		</div>
	);
}
