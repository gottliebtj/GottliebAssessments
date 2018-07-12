import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/header'
import RegisterForm from './components/registerform'
import Faq from './components/funnypage'
import Upload from './components/assessment'

const RegisterPage = ({ match }) => (
  <div>
    <Header title='Register' />
    <RegisterForm />
  </div>
)

const UploadPage = ({ match }) => (
  <div>
    <Header title='Register' />
    <Upload />
  </div>
)

const FAQPage = ({ match }) => (
  <div>
    <Header title='FAQ' />
    <Faq />
  </div>
)

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/register' component={RegisterPage} />
        <Route path='/faq' component={FAQPage} />
        <Route path='/upload' component={UploadPage} />

      </Switch>
    </div>
  </Router>
)

var render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

render()
