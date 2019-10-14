import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img
                src="https://static3.depositphotos.com/1004206/180/i/450/depositphotos_1802640-stock-photo-lake.jpg"
                alt=""/>
        </div>
        <div>
            ava + descr
        </div>
        <MyPosts/>
    </div>
};

export default Profile;