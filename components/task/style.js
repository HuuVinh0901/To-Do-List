import { StyleSheet } from 'react-native';
import color from './../../contains/color'
const style = StyleSheet.create({
  
  square: {
    width: 30,
    height: 30,
    borderRadius: 8,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  even:{
    backgroundColor: color.second,
  },
  odd:{
    backgroundColor: color.green
  },
  number: {
    color: color.white
  },
  content: {
    width: '80%'
  },
  item: {
    flexDirection: 'row',
    backgroundColor: color.white,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10
  },
})
export default style;