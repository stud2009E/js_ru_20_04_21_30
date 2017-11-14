import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordeon from '../decorators/accordeon';

class ArticleList extends Component{

    render(){
        const {articles, openArticleId, toggleArticle} = this.props;
        return (
            <ul>
                {articles.map(article =>
                    <li key={article.id}>
                        <Article article={article}
                                 isOpen = {article.id == openArticleId}
                                 toggleOpen = {toggleArticle(article.id)}/>
                    </li>
                )}
            </ul>
        );
    }
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default accordeon(ArticleList);

