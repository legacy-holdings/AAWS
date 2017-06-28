import React from 'react';
import {connect} from 'react-redux';
import {
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

class IndexContainer extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          React VR
        </Text>
      </View>
    );
  }
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
