import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src="http://andrey-eltsov.ru/wp-content/uploads/2017/09/SmehAva1-300x300.jpg" alt=""/>
        {props.message}
        <div>
            <span>like</span> {props.likesCounts}
        </div>
    </div>
};

export default Post;