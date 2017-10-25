// @flow
import React, {Component} from 'react';

type Props = {
  history: {
    push: Function,
  },
};

export default (
  ComposedComponent,
  user: Object,
  patients: Object,
  updateGlobalState: Function
) => {
  const token = localStorage.getItem ('token');
  class Authentication extends Component<Props> {
    componentDidMount () {
      if (!token || token === 'undefined') {
        this.props.history.push ('/');
      }
    }

    render () {
      return (
        <ComposedComponent
          {...this.props}
          user={user}
          patients={patients}
          updateGlobalState={updateGlobalState}
        />
      );
    }
  }

  return Authentication;
};
