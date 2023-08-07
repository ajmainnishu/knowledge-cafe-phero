import { useState } from 'react';
import './Blogs.css'
import { useEffect } from 'react';
import Articles from '../Articles/Articles';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./fakeData/fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blogs-container'>
            <div className='article-container'>
                {
                    blogs.map(blog => <Articles blogs={blog} key={blog.id}></Articles>)
                }
            </div>
            <div>
                <h3>Order</h3>
            </div>
        </div>
    );
};

export default Blogs;