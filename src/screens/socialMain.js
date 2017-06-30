import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../styles';
import SocialData from '../reducers/social.js';

export default class SocialMain(nextNode) extends Component {
  // LibraryCategories: Displays the header and buttons for each main topic.

  testQuestion(nextNode){
    const locNextNode = _.get(SocialData, nextNode);
    if (_.has(locNextNode, "actions")){
      Actions.socialAction({action: nextNode});
    } else {
      Actions.socialMain({nextNode: nextNode});
    }
  }

  render(){
    const {backgroundImage, containerViewStyle, containerHolderStyle, imageStyle, buttonContainer, buttonLarge, buttonSmall, labelStyle, headerStyle, flex1, flex2, flex3, flex4} = Styles;

    return (
      <Image source={require('../../assets/images/app_bg2.png')} style={backgroundImage}>
      <View style={containerViewStyle}>
        <View style={[containerViewStyle, flex4]}>
          <Text style={[headerStyle, {marginVertical:10}]}>{this.props.nextNode.question}</Text>
        </View>
        <View style={containerHolderStyle, {flexDirection:'row'}}>
          <TouchableOpacity onPress={this.testQuestion.bind({this.props.nextNode.no})} style={flex1, buttonSmall}>
            <Text style={[labelStyle, {padding:10}]}>No</Text>
          </TouchableOpacity>
          <View style={{width:10}} />
          <TouchableOpacity onPress={this.testQuestion.bind({this.props.nextNode.yes})} style={flex1, buttonSmall}>
            <Text style={[labelStyle, {padding:10}]}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Image>
  );
}

}
