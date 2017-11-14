import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import togglOpen from  '../decorators/toggleOpen';

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool.isRequired
    }

    render() {
        const {article, toggleOpen} = this.props;
        return (
            <section>
                <h3 onClick={toggleOpen}>
                    {article.title}
                </h3>
                {this.getBody(this.props)}
            </section>
        );
    }

    getBody({isOpen, article}) {
        return isOpen && (
            <div>
                {article.text}
                {<CommentList comments={article.comments}/>}
            </div>
        );
    }
}

export default togglOpen(Article);