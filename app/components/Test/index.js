import React from 'react';
import PropTypes from 'prop-types';

const Test = props => {

  return (
    <div className="test">
      <form action="/test" method="post">
        <input type="submit" value="testbutton"/>
      </form>
      <button onClick={props.changeFilter}>CLICK ME</button>
    </div>
  );
};

Test.defaultProps = {
};

Test.propTypes = {
};

export default Test;
