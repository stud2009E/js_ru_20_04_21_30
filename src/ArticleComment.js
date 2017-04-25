import React, {Component} from 'react';

export default class CommentList extends Component(){
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

    getCommentBody(){

    }

    render(){
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{this.getCommentHeader()}</a>
                {this.getCommentBody()}
            </div>
        )
    }
}