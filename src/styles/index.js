import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex:1,
    height:null,
    width:null,
    resizeMode:'cover',
    backgroundColor: '#fff',
    alignItems:'stretch'
  },
  containerViewStyle:{
    flex:1,
    alignItems:'center'
  },
  containerHolderStyle:{
    flex:1,
    alignItems:'stretch',
    margin:10
  },
  containerButtonStyle:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  imageStyle:{
    flex:1,
    resizeMode:'contain'
  },
  labelStyle:{
    fontSize:30,
    color:'#bbb',
  },
  headerStyle:{
    margin:5,
    fontSize:40,
    color:'#bbb',
  },
  buttonLarge:{
    height:100,
    borderRadius:10,
    backgroundColor: '#ccc3',
    alignItems:'baseline',
    justifyContent:'flex-end',
    opacity:.95,
    elevation: 2,
    paddingLeft:5,
    paddingBottom:5
  },
  buttonContainer:{
    flex:1,
    flexWrap:'nowrap',
    padding:5
  },
  buttonSmall:{
    height:100,
    borderRadius:10,
    backgroundColor: '#ccc3',
    alignItems:'baseline',
    justifyContent:'flex-end',
    opacity:.95,
    elevation: 2
  },
  flex1:{
    flex:1
  },
  flex2:{
    flex:2
  },
  flex3:{
    flex:3
  },
  flex4:{
    flex:4
  }

});
