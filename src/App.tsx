import { AppstoreOutlined, MailOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons';
import PageHeader from '@components/PageHeader';
import { connect } from '@lib/redux';
import About from '@pages/about';
import Home from '@pages/home';
import NotFound from '@pages/notfound';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

const App = (xx: any) => {
    const [currentNav, setCurrentNav] = useState('Overview');
    const [openKeys, setOpenKeys] = useState<string[]>(['sub1']);

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
                            console.log(key);
                        }}
                        style={{ width: 268 }}>
                        <Menu.Item key="Overview" icon={<PieChartOutlined />}>
                            概览
                        </Menu.Item>
                        <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </Menu.SubMenu>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="sub5">Option 5</Menu.Item>
                        <Menu.Item key="sub6">Option 6</Menu.Item>
                        <Menu.Item key="sub7">Option 7</Menu.Item>
                        <Menu.Item key="sub8">Option 8</Menu.Item>
                    </Menu>
                </aside>
                <div className="flex-auto p-24">
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default connect(({ language, navigator }: any) => ({
    language,
    currentMenu: navigator.menu,
    // currentMenu: navigator.menu,
}))(withRouter(App));
