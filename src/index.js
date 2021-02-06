import React from 'react';
import ReactDOM from 'react-dom';
import ListingPage from './listingPage';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(`store `, store);

ReactDOM.render(
    <Provider store={store}>
        <ListingPage />
    </Provider>
    , document.getElementById('root'));