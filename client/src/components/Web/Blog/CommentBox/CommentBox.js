import React from 'react';
import HyvorTalk from 'hyvor-talk-react';

export default function CommentBox(props) {
    const {id} = props;
    return (
        <div className = "hyvor-talk">
            <HyvorTalk.Embed 
                websiteId={791}
                id={id}
                loadMode = "scroll"
            />
        </div>
    )
}
