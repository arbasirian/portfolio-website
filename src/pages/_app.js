import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import '../assets/styles/global.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class MyApp extends App {
    render() {
        const {Component, pageProps } = this.props;
        return(
            <Provider store={store}>
                <Component { ...pageProps } />
            </Provider>
        );
    }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);