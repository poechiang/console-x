import React from 'react';
import { Link } from 'react-router-dom';

const PageFooter = () => {
    return (
        <footer className="oc-footer mt-24">
            <div className="frame flexable --line-center h-59">
                <Link to={'/overview'}>概览</Link>
                <Link to={'/help'}>帮助</Link>
                <Link to={'/about'}>关于</Link>
                <span className="flex-auto"></span>
                Jeffery &copy; {new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default PageFooter;
