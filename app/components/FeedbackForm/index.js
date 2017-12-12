import React from 'react';
import PropTypes from 'prop-types';
import {
} from '../../components';

const FeedbackForm = props => {
  return (
    <div className="feedback-form">
      <form method="post" action="/feedback">
        <input type="text" name="first" placeholder="first name" value=""/>
        <input type="text" name="last" placeholder="last name" value=""/>
        <select name="type">
          <option>edit fields</option>
          <option>submit a feature request</option>
          <option>report a bug</option>
          <option>suggest an improvement</option>
          <option>leave a note of gratitude</option>
          <option>other</option>
        </select>
        <input type="text" cols="8" name="comment" placeholder="leave your comments here" value=""/>
      </form>
    </div>
  );
};

FeedbackForm.defaultProps = {

};

FeedbackForm.propTypes = {
};

export default FeedbackForm;
