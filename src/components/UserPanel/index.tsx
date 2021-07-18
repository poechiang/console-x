import { DownOutlined } from '@ant-design/icons';
import { ReactComponent as UserLogo } from '@assets/images/user.svg';
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';

const UserPanel = ({ className }: ComponentProps) => {
    return (
        <Dropdown
            overlay={
                <Menu theme="dark">
                    <Menu.Item key="zh-CN">简体中文</Menu.Item>
                    <Menu.Item key="en-US">English</Menu.Item>
                    <Menu.Item key="de">Deutschland</Menu.Item>
                    <Menu.Item key="ja">日本</Menu.Item>
                    <Menu.Item key="ko">대한민국</Menu.Item>
                    <Menu.Item key="fr">France</Menu.Item>
                    <Menu.Item key="it">Italia</Menu.Item>
                    <Menu.Item key="ru">Россия</Menu.Item>
                </Menu>
            }>
            <Button className={className} type="text">
                <UserLogo className="icon mr-4" fontSize={'1.5em'} />
                Jeff <DownOutlined />
            </Button>
        </Dropdown>
    );
};

export default UserPanel;
