import React from 'react';
export default class Root extends React.Component {
    state = {
      store: this.props.store,
      globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        return (
            <div class="navbar">
                <ul>
                    <li><a href="#/app1">App 1 (React)</a></li>
                    <li><a href="#/app2">App 2 (Angular 6)</a></li>
                    <li><a href="#/app3">App 3 (Angular 1)</a></li>
                    <li><a href="#/app4">App 4 (Vue)</a></li>
                    <li><a href="#/app5">App 5 (Angular 6)</a></li>
                </ul>
            </div>
        )

    }
}
