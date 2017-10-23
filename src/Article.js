import React, {Component} from 'react';
import Comment from './Comment.js';

export default class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isCommOpen: false
        };
    }

    render() {
        const {article} = this.props;
        return (
            <section>
                <h3 onClick={this.toggleOpen}>
                    {article.title}
                </h3>
                {this.getBody()}
                {this.getComments()}
            </section>
        );
    }

    getBody() {
        return this.state.isOpen &&
            <div>
                {this.props.article.text}
            </div>
    }

    getComments(){
        const {comments} = this.props.article;
        const aCommentItems = comments && comments.map(comment =>
                <li key={comment.id}>
                    <Comment comment={comment}/>
                </li>
            );

        return (
            <div >{
                this.state.isOpen && <h4 onClick={this.toggleCommOpen}>
                    {this._getCommentsHead()}
                </h4>
                }
                {
                    this.state.isCommOpen && <ul>
                        {aCommentItems}
                    </ul>
                }
            </div>
        );
    }

    _getCommentsHead(){
        return this.state.isCommOpen ? 'Close comments' : 'Show comments';
    }

    toggleCommOpen =(ev) =>{
        this.setState({
            isOpen: this.state.isOpen,
            isCommOpen: !this.state.isCommOpen
        });
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen,
            isCommOpen: this.state.isCommOpen
        });
    }
}