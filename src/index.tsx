import '@assets/styles/common.less';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import initStore, { Provider } from './lib/redux/index';
import reportWebVitals from './reportWebVitals';

const store = initStore({
    language: 'zh-CN',
    messages: [1, 2, 3],
    navigator: {
        menu: 'home',
        nav: 'overview',
    },
});

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
