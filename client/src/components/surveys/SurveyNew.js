//container for surveyform and surveyreview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  constructor(props) {
    super(props);

    this.state = { showFormReview: false };
  }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel = {() => this.setState({ showFormReview: false })}
        />

      )
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        <h3>Create a new Survey</h3>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;