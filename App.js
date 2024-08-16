
import { Text, View, ScrollView,Alert } from 'react-native';
import Task from './components/task';
import styles from './App.component.style'
import Form from './components/form'
import { useState } from 'react';
export default function App() {
  const [taskList, setTaskList] = useState([])
  const hanldeAddTask = (task) =>{
    //Add
    setTaskList([...taskList,task]);
  }

  const handleDeleteTask = (index)=>{
    Alert.alert(
      'Notification',
      'Do you want to delete item?',
      [
        {
          text: 'OK',
          onPress:() =>{
            let temp=[...taskList];
            temp.splice(index,1);
            setTaskList(temp);
          }
        },
        {
          text: 'Cancel',
          onPress:() =>{

          }
        },
      ]
    )
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>To Do List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item,index)=>{
              return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
          
        </ScrollView>

      </View>
      <Form onAddTask={hanldeAddTask} />
    </View>
  );
}

