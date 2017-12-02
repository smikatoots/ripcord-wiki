import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions/HOCAction';
import {
  Icon,
  IconGroup
} from '../../components';
import {ContainerEnhancer} from '../../HOC';

class IconGroupContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('state', this);
  }

  render() {
    return (
      <div>
          <IconGroup iconDetails={this.props.filter[1]} />
      </div>
    );
  }
}

export default ContainerEnhancer(IconGroupContainer, actions);
