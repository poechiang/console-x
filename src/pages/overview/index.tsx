import Blocker from '@components/Blocker';
import { withScope } from '@lib/console';
import { Radio } from 'antd';
import React, { useEffect } from 'react';
import DailyViews from './DailyViews';

const { Group } = Radio;

const console = withScope('home');

const Overview = () => {
    useEffect(() => {
        console.info(`page [Home] initializing...`);
    }, []);
    return (
        <article id="home" className="page-wrapper">
            <Blocker
                title="点击率"
                extra={
                    <Group
                        options={[
                            { label: 'Apple', value: 'Apple' },
                            { label: 'Pear', value: 'Pear' },
                            { label: 'Orange', value: 'Orange' },
                        ]}
                    />
                }>
                <DailyViews />
            </Blocker>
        </article>
    );
};
export default Overview;
