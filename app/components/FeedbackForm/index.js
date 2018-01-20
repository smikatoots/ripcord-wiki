import React from 'react';
import PropTypes from 'prop-types';
import {
} from '../../components';

const FeedbackForm = props => {
  return (
    <div className="feedback-div">
      we love feedback. <br/> drop us a note and help improve the ripcord wiki!
      <form className="feedback-form" method="post" action="/feedback">
        <input type="text" name="name" placeholder="name"/>
        <select name="type">
          <option value="" hidden>what would you like to do?</option>
          <option value="edit">edit fields</option>
          <option value="request">submit a feature request</option>
          <option value="bug">report a bug</option>
          <option value="suggestion">suggest an improvement</option>
          <option value="note">leave a random note :)</option>
        </select>
        <textarea placeholder="tell us more pls" name="comment"></textarea>
        <input type="submit" value="submit & exit modal"/>
      </form>
    </div>
  );
};

FeedbackForm.defaultProps = {

};

FeedbackForm.propTypes = {
};

export default FeedbackForm;
