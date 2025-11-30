import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ToDoList from"./src/components/ToDoList.jsx";
import ToDoForm from"./src/components/ToDoForm.jsx";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
  'Do laundry',
  'Go to gym',
  'Walk dog'
]);

    return(
      <SafeAreaView>
        <ToDoList tasks={tasks}/>
        <ToDoForm/>
        
      </SafeAreaView>
    );
}


export default App;
