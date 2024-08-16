import { StyleSheet } from 'react-native';
import color from './../../contains/color'
const style= StyleSheet.create({
addTask:{
    bottom:30,
    paddingHorizontal:20,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
input:{
    height:40,
    width:'80%',
    backgroundColor:color.white,
    borderColor:color.primary,
    borderWidth:1,
    borderRadius:20,
    paddingHorizontal:20,
    paddingVertical:10,
    color:color.text
},
iconWapper:{
    width:40,
    height:40,
    backgroundColor:color.primary,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor: color.primary
},
icon:{
    fontSize:24,
    color:color.white
}
})
export default style