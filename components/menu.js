import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import menuItems from "./menuItems.json";


export default function ShowMenu() {
    const { menu } = menuItems;
  
    const Item = ({ name, price }) => (
      <View style={styles.innerContainer}>
        <Text style={styles.normalText}>{name}</Text>
        <Text style={styles.normalText}>{"$ " + price} </Text>
      </View>
    );
    const renderItem = ({item}) => (
      <Item name={item.title} price={item.price}/>
    );
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Little Lemon</Text>
        <FlatList
          data={menu}
          keyExtractor={({id}) => id}
          renderItem={renderItem}       
        >
        </FlatList>
      </SafeAreaView>
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
  