import React, {useState} from 'react'
import Img from 'gatsby-image';

import pageStyles from "../pages/index.module.scss";
import postStyles from "../pages/post/post.module.scss"
import wrapperStyles from "../components/iframeWrapper.module.scss";

export default function IframeWrapper(props) {
    const [loaded, setLoaded] = useState(false);

	const toggleLoad = () => {
		setLoaded(true);
		console.log(`toggleLoad`);
	}

	setTimeout(function(){
		toggleLoad();
		console.log(`timeout toggleLoad`);
	}, 1000);


    let iframe;

    if(props.link.includes('youtube.com/embed')){
        iframe = (
        <>
            <div className={`${pageStyles.iframeContainer}`} style={{ margin: `0 auto`, marginBottom: `32px` }}>
				<iframe
						title={`${props.title}-mobile`}
						className={ loaded ? `${pageStyles.iframeResponsive} ${pageStyles.show}`: `${pageStyles.iframeResponsive}`}
						src={props.link}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={toggleLoad}
					/>
			</div>
			<div
					className={`${pageStyles.iframeDesktop}`}
					style={{ maxWidth: `840px`, margin: `0 auto`}}
				>
					<iframe
						title={props.title}
						className={ loaded ? `${pageStyles.iframeFullSize} ${pageStyles.show}`: `${pageStyles.iframeFullSize}`}
						width="840"
						height="472"
						src={props.link}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={toggleLoad}
					/>
			</div>
        </>
        )
    }
    else if (props.link.includes('bandcamp.com/Embedded')) {
        iframe = (<div className={`${pageStyles.iframeDesktop}`} style={{ margin: `0 auto`, marginBottom: `32px`, display: `block`}}>
            <iframe style={{border: 0, display: `block`}} 
            className={`${pageStyles.iframeFullSize} ${wrapperStyles.bandcampWrapper}`}
            style={{opacity: `1 !important`}}
            src="https://bandcamp.com/EmbeddedPlayer/album=3572913911/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
            seamless>
                &lt;a href="https://alexcarrmusic.bandcamp.com/album/questions-of-travel"&gt;Questions of Travel by Alex Carr&lt;/a&gt;
            </iframe>	
		</div>)
    }
    else {
        iframe = props.imgFiles.map((file) => <Img key={file.node.id} fluid={file.node.childImageSharp.fluid} className={postStyles.mainImage} />)
    }

    return (
        
        <>
            {iframe}   
        </>
    )
}
