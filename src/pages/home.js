import { View ,Text ,Button } from "react-native";
import {  useNavigation } from '@react-navigation/native';
import { styles } from "../style/stylesheets";

export default function Home(){
    const navigation = useNavigation();
    
      return (
        <View style={styles.container}>
          <Text> tela home</Text>
        <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
        </View>
      );
     };