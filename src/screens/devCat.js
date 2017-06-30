import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../styles';
import DevicesData from '../reducers/devices.js';

export default class DevCat extends Component {
  // DeviceCategories: Displays the header and buttons for each main topic.

  deviceTopic(topic){
    Actions.deviceContent({topic: topic});
  }

  render(){
    const {backgroundImage, containerViewStyle, containerHolderStyle, imageStyle, buttonContainer, buttonLarge, buttonSmall, labelStyle, headerStyle, flex1, flex2, flex3, flex4} = Styles;

    return (
      <Image source={require('../../assets/images/app_bg2.png')} style={backgroundImage}>
      <ScrollView>
        <View style={containerViewStyle}>
          _.forEach(LibraryData, (val, key) => {
            <Text style={[headerStyle, {marginVertical:10}]}>{key}</Text>
            _.forEach(val, (val, key) => {
              <TouchableOpacity onPress={this.deviceTopic.bind(this, val)} style={flex1, buttonSmall}>
                <Text style={[labelStyle, {padding:10}]}>{key}</Text>
              </TouchableOpacity>
            });
          });
        </View>
      </ScrollView>
    </Image>
  );
}

}
