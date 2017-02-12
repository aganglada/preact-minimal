import Router from 'preact-router';
import { h, render } from 'preact';

import Home from 'views/home/home';

import Header from 'components/header/header';

render((
    <article>
        <Header title="Hello World" />
        <Router>
            <Home path="/"/>
        </Router>
    </article>
), document.getElementById('root'));