import React, {Component} from 'react';
import CommentList from './CommentList';

export default class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props;
        return (
            <section>
                <h3 onClick={this.toggleOpen}>
                    {article.title}
                </h3>
                {this.getBody()}
                {this.getArticleComments()}
            </section>
        );
    }

    getBody() {
        return this.state.isOpen && <div>{this.props.article.text}</div>;
    }

    getArticleComments(){
        const {comments} = this.props.article;
        return this.state.isOpen && <CommentList comments={comments}/>;
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}