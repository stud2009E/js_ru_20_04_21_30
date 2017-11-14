import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

class ArticleList extends Component{

    state = {
        openArticleId: null
    }

    render(){
        const {articles} = this.props;
        return (
            <ul>
                {articles.map(article =>
                    <li key={article.id}>
                        <Article article={article}
                                 isOpen = {article.id == this.state.openArticleId}
                                 toggleOpen = {this.toggleArticle(article.id)}/>
                    </li>
                )}
            </ul>
        );
    }
    toggleArticle = openArticleId => ev => {
        this.setState({openArticleId});
    }
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleList;

