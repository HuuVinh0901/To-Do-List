import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
const form = (props) => {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if(task.length===0){
            alert("VUi lòng nhập")
            return false;
        }
        props.onAddTask(task);
        setTask('')
        Keyboard.dismiss()
    }
    return (
        <View style={styles.addTask}>
            <TextInput
            value={task}
            onChangeText={(text)=>setTask(text)}
                placeholder='Your task'
                style={styles.input}
            />
            <TouchableOpacity onPress={handleAddTask}>


                <View style={styles.iconWapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>

        </View>

    )
}

export default form