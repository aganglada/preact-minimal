import { h, Component } from 'preact';

import styles from './home.pcss';

class Home extends Component {
    render() {
        return (
            <main>
                <p className={styles.text}>It feels like home</p>
            </main>
        );
    }
}

export default Home;
