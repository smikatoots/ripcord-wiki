import React from 'react';
import PropTypes from 'prop-types';
// import {
//
// } from '../../components';
const Upload = props => {
  return (
    <div>
      <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="avatar"></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

Upload.defaultProps = {
};

Upload.propTypes = {
};

export default Upload;
