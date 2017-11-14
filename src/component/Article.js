import React from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

function Article (props){
    const {article, toggleOpen} = props;
    return (
        <section>
            <h3 onClick={toggleOpen}>
                {article.title}
            </h3>
            {getBody(props)}
            {getComments(props)}
        </section>
    );
};

function getBody({isOpen, article}) {
    return isOpen ? <div>{article.text}</div> : null;
};

function getComments({isOpen, article}) {
    return isOpen && <CommentList comments={article.comments}/>;
};

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }).isRequired
};

export default toggleOpen(Article);