import React from 'react'

import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";
import { FaBandcamp } from "@react-icons/all-files/fa/FaBandcamp";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import socialLinksStyles from "./socialLinks.module.scss"


export default function socialLinks() {
    return (
        <div className={socialLinksStyles.container}>
            <a className={socialLinksStyles.a} href="#"><FaSpotify className={socialLinksStyles.icon}/></a>
            <a className={socialLinksStyles.a} href="#"><FaBandcamp className={socialLinksStyles.icon}/></a>
            <a className={socialLinksStyles.a} href="#"><FaTwitter className={socialLinksStyles.icon}/></a>
            {/* <FaSpotify className={socialLinksStyles.icon}/>
            <FaSpotify className={socialLinksStyles.icon}/> */}
        </div>
    )
}
