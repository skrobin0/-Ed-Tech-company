import React from 'react';
import Courses from '../../Courses/Courses';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import Achievement from '../Achievement/Achievement';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs'

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Courses></Courses>
            <ChooseUs></ChooseUs>
            <Achievement></Achievement>
            <Footer></Footer>
        </div>
    );
};

export default Home;