import React from "react";

const Comment = ({name, text, likes}) => {
    return (
        <div>
            <span>{name}</span>
            <span>{text}</span>
            <div>
                <span>{likes}</span>
                <i></i>
            </div>
        </div>
    );
}

export default Comment;