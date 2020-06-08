// JavaScript source code
import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

const Root = () => (
    <Provider store={store}></Provider>
);

export default Root;
