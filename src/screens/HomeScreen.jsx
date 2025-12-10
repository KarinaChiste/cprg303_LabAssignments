
import { SafeAreaView } from "react-native-safe-area-context";
import ToDoList from "../components/ToDoList.jsx";
import ToDoForm from"../components/ToDoForm.jsx";
import { useState } from "react";
import { Button } from "react-native";
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation}){
  const [tasks, setTasks] = useState([
  'Do laundry',
  'Go to gym',
  'Walk dog'
]);

const addTask = (taskText) => {
  setTasks([...tasks, taskText]);
};

return(
  <MainLayout>
    <SafeAreaView>
        <ToDoList tasks={tasks}/>
        <ToDoForm addTask ={addTask}/>
        
        <Button title="Go to About" onPress={() => navigation.navigate('About')}/>

      </SafeAreaView>
  </MainLayout>
   
)



}