//container for surveyform and surveyreview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <h3>Create a new Survey</h3>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;