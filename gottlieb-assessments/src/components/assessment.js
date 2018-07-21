import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TimeAgo from 'react-timeago'
import MultipleChoiceQuestion from './multichoice'
import TrueFalseQuestion from './truefalse'
import FillInBlankQuestion from './fillin'
import ConfirmationWindow from './acknowledgement'

const styles = theme => ({
  container: {
    flexWrap: 'wrap'
  },
  textField: {
    margin: '35px auto',
    display: 'block',
    padding: '35px',
    maxWidth: '350px',
    marginright: '150px',
    width: '50%'
  },
  menu: {
    margin: '50px auto'
  },
  root: {
    margin: '50px auto',
    display: 'inline-block',
    maxWidth: '750px',
    padding: '20px'
  },
  TimeAgo: {
    color: 'green'
  },
  div: {
    margin: 'auto',
    display: 'block',
    textAlign: 'center',
    backgroundColor: 'lightgray'

  },
  sectionheader: {
    color: 'blue'
  },
  p: {
    textAlign: 'right'
  }
})


const Assessment = ({ assessment, classes }) => (

  <div className={classes.div}>
    <Paper className={classes.root} elevation={15}>
      <p className={classes.p}>{assessment.taker}</p>
      <p className={classes.p}>7/21/18</p>

      <Typography variant='headline' component='h1'>
        {assessment.title}
      </Typography>
      <br />
      <span>
      Deadline: <TimeAgo className={classes.TimeAgo} date={assessment.deadline} />
      </span>
      <br />
      <br />
      <Typography component='h2'>
        <b>Directions:</b>{assessment.directions}
      </Typography>
      <br />
      <hr />
      <Typography className={classes.sectionheader} variant='headline' component='h2'>
        {assessment.multiChoiceQuestions.length} Multiple Choice
      </Typography>
      <hr />
      <MultipleChoiceQuestion assessment={assessment} questionNumber={1} />
      <hr />
      <MultipleChoiceQuestion assessment={assessment} questionNumber={2} />
      <hr />
      <MultipleChoiceQuestion assessment={assessment} questionNumber={3} />
      <hr />
      <Typography className={classes.sectionheader} variant='headline' component='h2'>
        {assessment.trueFalseQuestions.length} True/False
      </Typography>
      <hr />
      <TrueFalseQuestion assessment={assessment} questionNumber={1} />
      <hr />
      <TrueFalseQuestion assessment={assessment} questionNumber={2} />
      <hr />
      <TrueFalseQuestion assessment={assessment} questionNumber={3} />
      <hr />
      <TrueFalseQuestion assessment={assessment} questionNumber={4} />
      <hr />
      <TrueFalseQuestion assessment={assessment} questionNumber={5} />
      <hr />
      <Typography className={classes.sectionheader} variant='headline' component='h2'>
        {assessment.fillInBlankQuestions.length} Fill In the Blank
      </Typography>
      <hr />
      <FillInBlankQuestion assessment={assessment} questionNumber={1} />
      <hr />
      <FillInBlankQuestion assessment={assessment} questionNumber={2} />
      <br />
      <br />
      <ConfirmationWindow />
    </Paper>
  </div>
)

Assessment.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Assessment)
