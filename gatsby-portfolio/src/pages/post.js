import React from 'react'

import pageStyles from "./index.module.scss"
import projectsStyles from "./projects.module.scss"
import postStyles from "./post.module.scss";

export default function post({location}) {
    const post = {...location.state.post};
    return (
        <article className={`${postStyles.container}`}>
        <h1 className={`${pageStyles.title} ${projectsStyles.pageTitle} ${postStyles.title}`}>{post.title}</h1>
        </article>
    )
}
