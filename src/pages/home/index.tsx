import Blocker from '@components/Blocker';
import React, { useEffect } from 'react';
const Home = () => {
    useEffect(() => {
        console.info(`page [Home] initializing...`);
    }, []);
    return (
        <article id="home" className="page-wrapper">
            <Blocker title="123123123">12335</Blocker>
        </article>
    );
};
export default Home;
