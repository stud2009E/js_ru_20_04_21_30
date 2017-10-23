import React from 'react';

function Comment ({comment}){
    return (
        <div>{comment.text}
            <p><b>by {comment.user}</b></p>
        </div>
    );
}

export default Comment;