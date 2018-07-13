import React from 'react'
import ReactDOM from 'react-dom'
import find from 'lodash.find'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/header'
import RegisterForm from './components/registerform'
import Faq from './components/funnypage'
import MultipleChoiceQuestion from './components/multichoice'
import Assessment from './components/assessment'
import Assessments from './assessment-bank.json'

const RegisterPage = ({ match }) => (
  <div>
    <Header title='Register' />
    <RegisterForm />
  </div>
)

const AssessmentPage = ({ assessment, match }) => {
  const currentAssessment = find(Assessments, {id: match.params.id})
  return (
    <div>
      <Header />
      <Assessment assessment={currentAssessment} />

    </div>
  )
}

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
        <Route path='/:id' component={AssessmentPage} />

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
