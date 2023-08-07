import './Articles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Articles = (props) => {
    const {title, cover_image, read_time, publish_date, author_name, author_image} = props.blogs;
    return (
        <div className='article'>
            <img src={cover_image} alt="cover image" />
            <div className='article-info-container'>
                <div className='article-info'>
                    <img src={author_image} alt="author image" />
                    <div>
                        <p>{author_name}</p>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div className='article-read'>
                    <p>{read_time} <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faBookmark} /></p>
                </div>
            </div>
            <h2>{title}</h2>
            <p className='article-hase'>#beginners &nbsp;&nbsp; #programming</p>
            <a href="">Mark as read</a>
            <hr />
        </div>
    );
};

export default Articles;