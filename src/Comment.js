import React, {Component} from 'react';

export default class Comment extends Component {

    constructor(){
        super();
        this.state = {
            isOpen: false
        }
    }

    render(){
        return (
            <section>
                <h5 onClick={this.toggleOpen}>
                    {this.getCondText()}
                </h5>
                {this.getBody()}
            </section>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen:!this.state.isOpen
        });
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

    getCondText(){
        return this.state.isOpen ? "Hide comments" : "Show comments";
    }
}