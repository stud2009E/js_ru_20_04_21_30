import React, {Component} from 'react';

export default class Comment extends Component {

    constructor(){
        super();
    }

    render(){
        const {comment} = this.props;
        return <div>{comment.text}
            <p><b>{comment.user}</b></p>
        </div>
    }
}