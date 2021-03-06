import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography'




const styles = theme => ({
  root: {
    display: 'block',
    margin: 'auto',
    width: '100%'
  },
  formControl: {
    margin: theme.spacing.unit ,
    width: '75%'
  },
  h3: {
    color: 'black',
    fontfamily: 'Gadget'
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
})


class RadioButtonsGroup extends React.Component {

  state = {
    value: 'none',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    //this is where you dynamically assign the props of the object based on what you pass in :)
    const {
        assessment,classes,questionNumber
      } = this.props

    return (

      <div className={classes.root}>

        <FormControl component="fieldset"  className={classes.formControl}>
          <FormLabel component="legend" >Question {questionNumber}</FormLabel>
          <Typography variant='headline' component='h2'>
          {assessment.trueFalseQuestions[questionNumber-1].question}
          </Typography>
          <RadioGroup
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value={assessment.trueFalseQuestions[questionNumber-1].possibilities[0]} control={<Radio color="primary" />} label={assessment.trueFalseQuestions[questionNumber-1].possibilities[0]} />
            <FormControlLabel value={assessment.trueFalseQuestions[questionNumber-1].possibilities[1]} control={<Radio color="secondary" />} label={assessment.trueFalseQuestions[questionNumber-1].possibilities[1]} />

          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
