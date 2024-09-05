import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useUpdate } from "react";
import { Switch, StyleSheet, Text, View, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const [pushEnabled, setPushEnabled] = useState(false);
  const togglePush = () => setPushEnabled((previousState) => !previousState);

  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const toggleMarketing = () =>
    setMarketingEnabled((previousState) => !previousState);

  const [newsEnabled, setNewsEnabled] = useState(false);
  const toggleNews = () => setNewsEnabled((previousState) => !previousState);

  useEffect(() => {
    (async () => {
      try {
        const values = await AsyncStorage.multiGet([
          "pushEnabled",
          "marketingEnabled",
          "newsEnabled",
        ]);
        const initialState = values.reduce((acc, curr) => {
          acc[curr[0]] = JSON.parse(curr[1]);
          return acc;
        }, {});

        setPushEnabled(initialState.pushEnabled ?? false);
        setMarketingEnabled(initialState.marketingEnabled ?? false);
        setNewsEnabled(initialState.newsEnabled ?? false);
      } catch (e) {
        Alert.alert(`An error occurred: ${e.message}`);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.multiSet([
          ["pushEnabled", JSON.stringify(pushEnabled)],
          ["marketingEnabled", JSON.stringify(marketingEnabled)],
          ["newsEnabled", JSON.stringify(newsEnabled)],
        ]);
      } catch (e) {
        Alert.alert(`An error occurred: ${e.message}`);
      }
    })();
  }, [pushEnabled, marketingEnabled, newsEnabled]);

  return (
    <SafeAreaView>
      <Text style={styles.headerText}>Account Preferences</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.normalText}>Push Notification</Text>
        <Switch onValueChange={togglePush} value={pushEnabled} />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.normalText}>Marketing Emails</Text>
        <Switch onValueChange={toggleMarketing} value={marketingEnabled} />
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.normalText}>Latest News</Text>
        <Switch onValueChange={toggleNews} value={newsEnabled} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: 50,
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  normalText: {
    color: "#483D8B",
    fontSize: 24,
    padding: 10,
  },
  headerText: {
    color: "#00008B",
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 20,
  },
});
