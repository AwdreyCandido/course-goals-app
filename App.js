import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsList] = useState([]);

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
        {goalsList.map((goal) => {
          return (
            <View style={styles.goalItem} key={goal}>
              <Text style={{ color: "white" }}>{goal}</Text>
            </View>
          );
        })}
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
