import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ToDoList from"./src/components/ToDoList.jsx";
import ToDoForm from"./src/components/ToDoForm.jsx";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen.jsx';
import AboutScreen from './src/screens/AboutScreen.jsx';

function App() {

  const Stack = createNativeStackNavigator();

//   const [tasks, setTasks] = useState([
//   'Do laundry',
//   'Go to gym',
//   'Walk dog'
// ]);

// const addTask = (taskText) => {
//   setTasks([...tasks, taskText]);
// };

    return(
      <NavigationContainer>
        {/* <SafeAreaView>
        <ToDoList tasks={tasks}/>
        <ToDoForm addTask ={addTask}/>
        
      </SafeAreaView> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      </NavigationContainer>
      
    );
}


export default App;
