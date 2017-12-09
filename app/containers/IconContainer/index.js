import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions/HOCAction';
import {
  Icon,
  IconGroup
} from '../../components';
import {ContainerEnhancer} from '../../HOC';

class IconContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('state', this);
  }

  openModal(bool) {
    console.log('PROPS', this.props);
    console.log('BOOL', bool);
    this.props.toggleModal(bool);
  }

  render() {
    return (
      <div>
        {this.props.iconDetails.map(icon =>
          <Icon
          key={icon._id}
          id={icon._id}
          fname={icon.fname}
          lname={icon.lname}
          title={icon.title}
          department={icon.department}
          openModal={(bool) => this.openModal(bool)}
          />
        )}
      </div>
    );
  }
}

export default ContainerEnhancer(IconContainer, actions);
