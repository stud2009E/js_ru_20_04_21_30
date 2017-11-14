import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent{

    state = {
        openArticleId: null
    }

    toggleArticle = openArticleId => ev => {
        this.setState({openArticleId});
    }

    render(){
        return <OriginalComponent {...this.props}
                                   openArticleId={this.state.openArticleId}
                                   toggleArticle={this.toggleArticle}/>
    }
}