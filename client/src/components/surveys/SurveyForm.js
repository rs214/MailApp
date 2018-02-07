import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';

const FIELDS = [
  { label:'Survey Title', name: 'title'},
  { label:'Subject Line', name: 'subject'},
  { label:'Email Body', name: 'body'},
  { label:'Recipient List', name: 'emails'}
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return <Field label={label} type="text" name={name} component={SurveyField} key={name}/>
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);