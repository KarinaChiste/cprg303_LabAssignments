import { Button, TextInput, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import tasksList from "../data/tasks.json";

export default function ToDoForm({addTask}){
  
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(()=> {
    setTasks(tasksList.tasks);
  },[]);

  const handleRandomTask = () =>{
    if (tasks.length > 0){
      const random = tasks[Math.floor(Math.random() *tasks.length)];
      setTaskText(random);
    }
  }
  
  return(
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Generate Random Task" onPress={handleRandomTask}/>
      <Button title="Add Task" onPress={() => addTask(taskText)} />

        </View>
  )
}

const styles = StyleSheet.create({
  
  form: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginHorizontal:20,
    marginTop:20
  },
  input:{
    flex:1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal:10,
    paddingVertical: 5,
    marginRight:10,
  },
});