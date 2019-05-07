import React from 'react';
import Header from '../../organisms/Header/Header';
import Avatar from '../../organisms/Avatar/avatar';
import Content from './Content';
import '../../style/style-blog.css';
const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <Avatar></Avatar>
            <Content></Content>
        </div>
    );
}
export default Homepage;