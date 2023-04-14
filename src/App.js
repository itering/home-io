import React, {Component} from 'react';
import Routes from './Routes'
import './App.scss'
import 'antd/dist/antd.min.css'
import './locales/i18n';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes/>
            </div>
        );
    }
}

export default App;
