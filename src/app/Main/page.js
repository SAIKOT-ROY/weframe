import React from 'react';
import Progress from './Components/Progress';
import ContentCard from './Components/ContentCard';

const HomePage = () => {
    return (
        <div className='text-white'>
            <Progress />
            <ContentCard />
        </div>
    );
};

export default HomePage;