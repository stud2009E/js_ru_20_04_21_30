import React, {Component} from 'react';
import CommentList from "./CommentList";

export default class ArticleComment extends Component{
    state = {
        isOpen:false
    }

    toggleOpen = () =>{
        this.setState({
            isOpen:!this.state.isOpen
        });
    }

    getCommentHeader(){
        return this.state.isOpen ? "Hide comments" : "Show Comments";
    }

    getCommentBody(comments){
        return this.state.isOpen ? <CommentList comments={comments}/> : null;
    }

    render(){
        const comments = this.props.comments;
        return (
            <div>
                <h5>Leave your comment:</h5>
                <div>
                    <textarea/>
                </div>
                <a href="#" onClick={this.toggleOpen}>{this.getCommentHeader()}</a>
                {this.getCommentBody(comments)}
            </div>
        )
    }
}