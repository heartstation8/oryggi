import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../styles';
import LibraryData from '../reducers/library';

export default class SocialAction (action) extends Component {
  // DeviceContent: Displays the list of content for topics.

  render(){
    const {backgroundImage, containerViewStyle, containerHolderStyle, imageStyle, buttonContainer, buttonLarge, buttonSmall, labelStyle, headerStyle, flex1, flex2, flex3, flex4} = Styles;

    return (
      <Image source={require('../../assets/images/app_bg2.png')} style={backgroundImage}>
      <ScrollView>
        <View style={containerViewStyle}>
          _.forEach({action}, (val, key) => {
            _.map({val}, (value) => {
              <View style={{flex:1, borderWidth:1, borderRadius:5}}>
                <Text>{value}</Text>
              </View>
              <View style={{height:10}} />
            });
          });
          <Text style={[headerStyle, {marginVertical:10}]}>Library</Text>
          _.forEach({action.libraries}, (val) => {
            const lib = _.get(LibraryData, {_.find(LibraryData, {val}))
            <Text style={[headerStyle, {marginVertical:10}]}>{Object.key(lib)}</Text>
            <Text style={[labelStyle, {padding:10}]}>{lib}</Text>
            <View style={{height:10}} />
          );
        </View>
      </ScrollView>
    </Image>
  );
}

}
