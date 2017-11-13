import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component{

    static defaultProp = {
        comments:[]
    }

    constructor(){
        super();
        this.state = {
            isOpen: false
        };
    }

    render(){
        return <div>
            <a href="#" onClick={this.toggleOpen}>
                {this.getHeader()}
            </a>
            {this.getBody()}
        </div>;
    }

    getHeader(){
        return this.state.isOpen ? 'Close comments' : 'Show comments';
    }

    getBody(){
        const sNoComment = 'No comments yet';
        if(!this.state.isOpen){
            return null;
        }
        const {comments} = this.props;
        if(!comments || !comments.length){
            return <p>{sNoComment}</p>;
        }
        return <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
        </ul>;
    }

    toggleOpen = (event) => {
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
}
