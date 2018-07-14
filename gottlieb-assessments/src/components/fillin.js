import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({

  container: {
    display: 'block',
    margin: 'auto',
    width: '100%'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // this is how you change the length of the extry bar
    width: '75%'
  }
})

const TextFieldMargins = props => {
  const { classes, assessment, questionNumber } = props

  return (
    <div className={classes.container}>
      <FormLabel component='legend' >Question {questionNumber}</FormLabel>
      <Typography variant='headline' component='h2'>
        {assessment.fillInBlankQuestions[questionNumber - 1].question}
      </Typography>
      <TextField
        label='Type Answer Here'
        id='margin-normal'
        className={classes.textField}
        onChange={(evt) => { console.log(evt.target.value) }}
        margin='normal'
      />
    </div>
  )
}

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFieldMargins)
