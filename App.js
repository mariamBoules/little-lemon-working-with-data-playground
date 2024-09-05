import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ShowMenu from "./components/menu";
import Settings from "./components/settings";
import Customers from "./components/customers";

const Drawer = createDrawerNavigator();

export default function App() {
  return(
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="SQLite">
      <Drawer.Screen name="menu" component={ShowMenu}/>
      <Drawer.Screen name="Settings" component={Settings}/>
      <Drawer.Screen name="Customers" component={Customers}/>

    </Drawer.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    backgroundColor: "#FFF8DC",
    marginTop: 50,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: "#00008B",
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 20,
  },
  normalText: {
    color: "#483D8B",
    fontSize: 18,
    padding: 10,
  },
});
