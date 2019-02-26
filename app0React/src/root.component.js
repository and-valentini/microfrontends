import React from 'react';
import {Provider, connect} from 'react-redux';
import Counter from './counter';
import reactLogo from '../assets/react-logo.png'


export default class Root extends React.Component {


    state = {
      store: this.props.store,
      globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {

        let ret = 		<div class="navbar">
            <ul>
            <a href="#/app1">
            <li>
            App 1 (React)
        </li>
        </a>
        <a href="#/app2">
            <li>
            App 2 (Angular 6)
    </li>
        </a>
        <a href="#/app3">
            <li>
            App 3 (Angular 1)
    </li>
        </a>
        <a href="#/app4">
            <li>
            App 4 (Vue)
        </li>
        </a>
        <a href="#/app5">
            <li>
            App 5 (Angular 6)
    </li>
        </a>
        </ul>
        </div>
        return ret;
    }
}
