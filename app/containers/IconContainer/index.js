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

  openModal(bool, id) {
    axios.post('/employee', {
      id: id
    })
    .then(res => {
      console.log('RES', res);
      this.props.changeModalDetails(res.data[0])
      this.props.toggleModal(bool);
    });

  }

  render() {
    return (
      <div className="icon-group">
        {this.props.iconDetails.map(icon =>
          <Icon
          key={icon._id}
          id={icon._id}
          fname={icon.fname}
          lname={icon.lname}
          title={icon.title}
          pic={icon.pic}
          openModal={(bool, id) => this.openModal(bool, id)}
          />
        )}
      </div>
    );
  }
}

export default ContainerEnhancer(IconContainer, actions);
