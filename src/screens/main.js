import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../styles';

export default class Main extends Component {
  // mainScene: initial screen upon loading oryggi. contains buttons to navigate to the other scenes.

  navigateToLibrary(){
    Actions.libraryCategory();
  }

  navigateToDev(){
    Actions.deviceCategory();
  }

  navigateToSoc(){
    Actions.socialCategory();
  }

  render(){
    const {backgroundImage, containerViewStyle, containerHolderStyle, imageStyle, buttonContainer, buttonLarge, buttonSmall, labelStyle, headerStyle, flex1, flex2, flex3, flex4} = Styles;

    return (
      <Image source={require('../../assets/images/app_bg.png')} style={backgroundImage}>
      <View style={containerViewStyle}>
        <View style={flex2}>
          <Image source={require('../../assets/icons/oryggi.png')} style={imageStyle} />
        </View>
        <View style={flex3}>
          <TouchableOpacity onPress={this.navigateToLibrary.bind(this)} style={buttonLarge}>
              <Text style={[labelStyle, {padding:10}]}>Library</Text>
          </TouchableOpacity>
          <View style={flex4}>
            <Text style={[headerStyle, {marginVertical:10}]}>Help me with...</Text>
            <View style={containerHolderStyle, {flexDirection:'row'}}>
              <TouchableOpacity onPress={this.navigateToDev.bind(this)} style={flex1, buttonSmall}>
                  <Text style={[labelStyle, {padding:10}]}>Device{"\n"}Security</Text>
              </TouchableOpacity>
              <View style={{width:10}} />
              <TouchableOpacity onPress={this.navigateToSoc.bind(this)} style={flex1, buttonSmall}>
                  <Text style={[labelStyle, {padding:10}]}>Social{"\n"}Engineering</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Image>
  );
}

}
