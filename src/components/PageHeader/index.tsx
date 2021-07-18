import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import logo from '@assets/images/logo.svg';
import LangDropDown from '@components/LangDropDown';
import UserPanel from '@components/UserPanel';
import { connect } from '@lib/redux';
import { Badge, Button, Input } from 'antd';
import React from 'react';

const PageHeader = ({ msgCount, language }: any) => {
    return (
        <header className="oc-header theme-back mb-24">
            <div className="frame flexable --line-center h-59">
                <a href="/">
                    <img src={logo} className="oc-header-logo" alt="Octopus Console" />
                </a>
                <a href="/">
                    <h3 className="oc-header-title" title="Octopus Console">
                        Octopus
                    </h3>
                </a>
                <span className="flex-auto"></span>
                <span className="oc-header-menu-item">
                    <Input placeholder="input search text" suffix={<SearchOutlined />} style={{ width: 160 }} />
                </span>
                <Button className="oc-header-menu-item" type={'text'}>
                    <Badge count={msgCount} offset={[10, -10]}>
                        <BellOutlined />
                    </Badge>
                </Button>
                <LangDropDown className="oc-header-menu-item" language={language} />
                <UserPanel className="oc-header-menu-item" />
            </div>
        </header>
    );
};

export default connect(({ messages, language }: any) => ({ msgCount: messages.length, language }))(PageHeader);
