import Preact from 'preact'
import Router from 'preact-router'
import Header from './components/header/header'
import Home from './pages/home/home'

const renderApp = () => {
  Preact.render(
    <article>
      <Header title="Preact minimal 🚀" />
      <Router>
        <Home path="/" />
      </Router>
    </article>,
    document.getElementById('root')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./pages/home/home', renderApp)
}

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime')

  runtime.install({
    onUpdateReady: () => {
      // Tells to new SW to take control immediately
      runtime.applyUpdate()
    },
    onUpdated: () => {
      // Reload the webpage to load into the new version
      window.location.reload()
    },
  })
}
