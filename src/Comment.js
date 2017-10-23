import React, {Component} from 'react';

export default class Comment extends Component{
    constructor(){
        super();
    }

    render(){
        const {comment} = this.props;
        return (<div>
            {comment.text}
            <h4>{comment.user}</h4>
        </div>);
    }

    getBody(){
        const {comments} = this.props;
        const commentItems = comments.map(comment =>
            <li key={comment.id}>
                {comment.text}
                <h5>{comment.user}</h5>
            </li>);

        return this.state.isOpen && <ul>{commentItems}</ul>;
    }
}