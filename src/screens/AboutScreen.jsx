import { Button, Text, View } from "react-native";
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({navigation}){
  return(
    <MainLayout>
      <View>
      <Text>
        App Name: To Do List
      </Text>
      <Text>
        Name: Karina Chiste
      </Text>
      <Text>
        Date: December 9, 2025
      </Text>
      <Button title="Go to Home" onPress={() =>navigation.navigate('Home')}/>
    </View>
    </MainLayout>
    
  )
}