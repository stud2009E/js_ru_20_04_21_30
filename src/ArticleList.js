import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

function ArticleList({articles}) {
    const elements = articles.map(article => <li key={article.id}><Article article={article}/></li>)
    return (
        <ul>
            {elements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList;

