import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Adjust, AdjustConfig, AdjustEnvironment, AdjustLogLevel, AdjustEvent } from '@awesome-cordova-plugins/adjust';

function App() {

    console.log('-----------------------------------------');

    console.log('Adjust Integration');

    const config = new AdjustConfig('2fm9gkqubvpc', AdjustEnvironment.Sandbox);
    config.setLogLevel(AdjustLogLevel.Verbose);
    Adjust.create(config);

    var adjustEvent = new AdjustEvent("g3mfiw");
    Adjust.trackEvent(adjustEvent);

    console.log('-----------------------------------------');

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React Native
        </a>
            </header>
        </div>
    );
}

export default App;
