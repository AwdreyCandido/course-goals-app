import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";

export default function App() {
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
  ]);

  function AddGoalHandler(goalText) {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { id: Math.log1p(Math.random()), text: goalText },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={AddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(goals) => {
            return <GoalItem goal={goals.item.text} />;
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
  goalsContainer: {
    flex: 4,
  },
});
