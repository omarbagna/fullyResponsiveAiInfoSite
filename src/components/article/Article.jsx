import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={ imgUrl } alt="blog"/>
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{ date }</p>
                    <h3><a href="#blog">{ title }</a></h3>
                </div>
                <p><a href="#blog">Read Full Article</a></p>
            </div>
        </div>
    )
}

export default Article
