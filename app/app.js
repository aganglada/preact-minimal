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
    const runtime = require('offline-plugin/runtime');

    runtime.install({
        onUpdateReady: () => {
            console.log('SW Event:', 'onUpdateReady');

            // Tells to new SW to take control immediately
            runtime.applyUpdate();
        },

        onUpdated: () => {
            console.log('SW Event:', 'onUpdated');

            // Reload page to load the new version
            window.location.reload();
        },

        onUpdateFailed: () => {
            console.log('SW Event:', 'onUpdateFailed');
        }
    })
}
