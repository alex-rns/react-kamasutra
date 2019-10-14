import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <button>Add post</button>
        </div>

        <div className={s.posts}>
            <Post message="Hi people!" likesCounts="5"/>
            <Post message="Help me?" likesCounts="15"/>
        </div>

    </div>
};

export default MyPosts;