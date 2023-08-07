import { useState } from 'react';
import './Blogs.css'
import { useEffect } from 'react';
import Articles from '../Articles/Articles';
import Bookmark from '../Bookmark/Bookmark';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [times, setTimes] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    // const notify = () => toast("Wow so easy!");
    useEffect(() => {
        fetch('./fakeData/fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    const totalTime = time => {
        let newTime = [...times, parseInt(time)];
        setTimes(newTime)
    }
    const totalBookmark = items => {
        // toast("Can't add more than 1");
        let newBookmark = [];
        const exists = bookmarks.find(bookmarkItem => bookmarkItem === items);
        if (!exists) {
            newBookmark = [...bookmarks, items];
        } else {
            toast.warn("Can't add more than 1");
            const remaining = bookmarks.filter(bookmarkItem => bookmarkItem !== items);
            newBookmark = [...remaining, exists];
        }
        setBookmarks(newBookmark);
    }
    return (
        <div className='blogs-container'>

            <div className='article-container'>
                {
                    blogs.map(blog => <Articles blogs={blog} key={blog.id} totalTime={totalTime} totalBookmark={totalBookmark}></Articles>)
                }
            </div>
            <div>
                <Bookmark times={times} bookmarks={bookmarks}></Bookmark>
            </div>
            {/* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */}
        </div>
    );
};

export default Blogs;