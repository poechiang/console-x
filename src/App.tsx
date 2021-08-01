import { BookOutlined, PieChartOutlined } from '@ant-design/icons';
import PageFooter from '@components/PageFooter';
import PageHeader from '@components/PageHeader';
import { connect } from '@lib/redux';
import About from '@pages/about';
import NotFound from '@pages/notfound';
import Overview from '@pages/overview';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { PageProps } from 'type';

const App = ({ history }: PageProps) => {
    const [currentNav, setCurrentNav] = useState('overview');
    const [openKeys, setOpenKeys] = useState<string[]>([]);

    return (
        <div className="App flexable --column h-full">
            <PageHeader />
            <div className="flexable flex-auto">
                <aside className="oc-aside pv-24">
                    <Menu
                        theme="dark"
                        mode="inline"
                        openKeys={openKeys}
                        onOpenChange={(keys: React.Key[]) => setOpenKeys(keys as string[])}
                        selectedKeys={[currentNav]}
                        onClick={({ key }) => {
                            setCurrentNav(key);
                            console.log(2222, key);
                            history.push(key);
                        }}
                        style={{ width: 268 }}>
                        <Menu.Item key="overview" icon={<PieChartOutlined />}>
                            概览
                        </Menu.Item>
                        <Menu.Item key="oss" icon={<BookOutlined />}>
                            OSS
                        </Menu.Item>
                    </Menu>
                </aside>
                <div className="flex-auto p-24">
                    <Switch>
                        <Route path="/overview">
                            <Overview />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route exact={true} path="/">
                            <Redirect to="/overview" />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <PageFooter />
                </div>
            </div>
        </div>
    );
};

export default connect(({ language }: any) => ({
    language,
}))(withRouter(App));
