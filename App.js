import { useState } from "react";
import {
  Button,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsList] = useState([
    { id: 1, text: "List item 1" },
    { id: 2, text: "List item 2" },
    { id: 3, text: "List item 3" },
    { id: 4, text: "List item 4" },
    { id: 5, text: "List item 5" },
    { id: 6, text: "List item 6" },
    { id: 7, text: "List item 7" },
    { id: 8, text: "List item 8" },
    { id: 9, text: "List item 9" },
    { id: 10, text: "List item 10" },
    { id: 11, text: "List item 11" },
    { id: 12, text: "List item 12" },
    { id: 13, text: "List item 13" },
    { id: 14, text: "List item 14" },
    { id: 15, text: "List item 15" },
  ]);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }
  function AddGoalHandler() {
    setGoalsList((currentGoals) => [...currentGoals, goalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button onPress={AddGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(goals) => {
            return (
              <View style={styles.goalItem}>
                <Text style={{ color: "white", fontWeight: 500 }}>
                  {goals.item.text}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    marginVertical: 8,
    padding: 14,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
