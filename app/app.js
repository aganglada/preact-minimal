import Router from 'preact-router';
import { h, render } from 'preact';

import Home from 'views/home/home';

import Header from 'components/header/header';

const renderApp = () => {
    render((
        <article>
            <Header title="Hello World" />
            <Router>
                <Home path="/"/>
            </Router>
        </article>
    ), document.getElementById('root'));
};

renderApp();

if (module.hot) {
    module.hot.accept('views/home/home', renderApp);
}

if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install();
}
