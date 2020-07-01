import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import '../assets/styles/global.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { setMobileDetect, mobileParser } from 'react-responsive-redux'

class MyApp extends App {
    render() {
        const {Component, pageProps, req } = this.props;
        const { dispatch } = store;

        // do our mobile detection
        const mobileDetect = mobileParser(req);
        // set mobile detection for our responsive store
        dispatch(setMobileDetect(mobileDetect));

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