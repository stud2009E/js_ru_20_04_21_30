import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

function CommentList(props) {
    const {isOpen, toggleOpen, comments} = props;

    return(
        <div>
            <a href="#" onClick={toggleOpen}> {getHeader(isOpen)} </a>
            {getBody(props)}
        </div>
    );
};

function getBody({isOpen, comments = []}){
    if(!isOpen){ return null;}
    if(!comments.length){ return <p>No comments yet</p>;}

    return (
        <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
        </ul>
    );
}

function getHeader(isOpen){
    return isOpen ? 'Close comments' : 'Show comments';
}

export default toggleOpen(CommentList);