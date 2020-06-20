import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./SocialLinks.scss";

export default function SocialLinks() {
    return(
        <div className = "social-bar">
            <a href = "https://www.instagram.com/aparentemx" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'instagram']} className = "instagram" size = "2x" />}</a>
            <a href = "https://www.facebook.com/aparentemx" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'facebook-f']} className = "facebook" size = "2x" />} </a>
            <a href = "https://www.pinterest.com/aparentemx" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'pinterest-p']} className = "pinterest" size = "2x" />} </a>
            {/* <a href = "https://www.youtube.com/aparentemx" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'youtube']} className = "youtube" size = "2x" />} </a>
            <a href = "https://www.linkedin.com/company/27186667" target = "__blank" rel = "noopener noreferrer" > {<FontAwesomeIcon icon={['fab', 'linkedin-in']} className = "linkedin" size = "2x" />} </a> */}
        </div>
    )
}