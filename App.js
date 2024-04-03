import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";

export default function App() {
  const [toggleModal, setToggleModal] = useState(false);
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

  function addGoalHandler(goalText) {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { id: Math.log1p(Math.random()), text: goalText },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentGoals) => [
      ...currentGoals.filter((goal) => goal.id !== id),
    ]);
  }

  function toggleModalHandler() {
    setToggleModal(!toggleModal);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        color="#5e0acc"
        title="Add New Goal"
        onPress={toggleModalHandler}
      />
      <GoalInput
        visible={toggleModal}
        onToggleModal={toggleModalHandler}
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(goal) => {
            return (
              <GoalItem goal={goal.item} onDeleteGoal={deleteGoalHandler} />
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
    justifyContent: 'center'
  },
  goalsContainer: {
    flex: 4,
  },

});
