import React from 'react';
import { Provider } from 'react-redux';
import NewApp from './newredux/newapp'
import store from './newredux/store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
              
                
                <NewApp />
            </div>
        </Provider>
    );
}

export default App;