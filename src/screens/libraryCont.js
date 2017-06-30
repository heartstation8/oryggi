import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../styles';

export default class LibraryCont (props) extends Component {
  // LibraryContent: Displays the list of content for topics.

  render(){
    const {backgroundImage, containerViewStyle, containerHolderStyle, imageStyle, buttonContainer, buttonLarge, buttonSmall, labelStyle, headerStyle, flex1, flex2, flex3, flex4} = Styles;

    return (
      <Image source={require('../../assets/images/app_bg2.png')} style={backgroundImage}>
      <ScrollView>
        <View style={containerViewStyle}>
          _.forEach({this.props.topic}, (val, key) => {
            <Text style={[headerStyle, {marginVertical:10}]}>{key}</Text>
            <Text style={[labelStyle, {padding:10}]}>{value}</Text>
            <View style={{height:10}} />
          });
        });
      </View>
    </ScrollView>
  </Image>
);
}

}
