// withMapData.js

import React from 'react';
import { connect } from 'react-redux';

const withMapData = (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    selectedPlace: state.map.selectedPlace, // Access selected place from the Redux store
  });

  const ConnectedComponent = connect(mapStateToProps)(WrappedComponent);

  return (props) => <ConnectedComponent {...props} />;
};

export default withMapData;
