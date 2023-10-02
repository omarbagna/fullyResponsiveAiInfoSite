import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';


const blogData = [
    { 
        imgUrl: blog02, 
        date: 'Nov 27, 2021', 
        title: 'GPT-3 and Open  AI is the future. Let us find out how it is?',
    },
    { 
        imgUrl: blog03, 
        date: 'Nov 27, 2021', 
        title: 'GPT-3 and Open  AI is the future. Let us find out how it is?',
    },
    { 
        imgUrl: blog04, 
        date: 'Nov 27, 2021', 
        title: 'GPT-3 and Open  AI is the future. Let us find out how it is?',
    },
    { 
        imgUrl: blog05, 
        date: 'Nov 27, 2021', 
        title: 'GPT-3 and Open  AI is the future. Let us find out how it is?',
    },
]

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Nov 27, 2021" title="GPT-3 and Open  AI is the future. Let us find out how it is?" />
                </div>
                <div className="gpt3__blog-container_groupB">
                    {blogData.map((item, index) => (
                        <Article imgUrl={item.imgUrl} date={item.date} title={item.title} key={item.imgUrl + index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog