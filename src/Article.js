import React, {Component} from 'react'
import ArticleComment from './ArticleComment'

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false
    }

    getBody() {
        return this.state.isOpen &&
            <div>
                {this.props.article.text}
                <ArticleComment comments={this.props.article.comments}/>
            </div>;
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {article} = this.props;
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
            </section>
        );
    }
}