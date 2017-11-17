import React from 'react';
import axios from 'axios';
import * as actions from '../../actions/HomePage';
import {
//   Test,
//   FilterGroup,
//   FilterItem,
//   Header,
  Icon,
  IconGroup
} from '../../components';
import {ContainerEnhancer} from '../../HOC';

class IconGroupContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconDetails: []
    };
  }

  componentDidMount() {
    axios.get(`/icon`)
    .then(res => {
      console.log('RESPONSE', res);
      const iconDetails = res.data;
      this.setState({ iconDetails });
    });
  }

  render() {
    return (
      <div>
          <IconGroup iconDetails={this.state.iconDetails} />
      </div>
    );
  }
}

export default ContainerEnhancer(IconGroupContainer, actions);
