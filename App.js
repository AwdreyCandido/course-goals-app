import { useState } from "react";
import { Button, FlatList, StyleSheet, View, Text, Image } from "react-native";

import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";
import CustomButtom from "./src/components/CustomButton";

export default function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [goalsList, setGoalsList] = useState([
    // { id: 1, text: "List item 1" },
    // { id: 2, text: "List item 2" },
    // { id: 3, text: "List item 3" },
    // { id: 4, text: "List item 4" },
    // { id: 5, text: "List item 5" },
    // { id: 6, text: "List item 6" },
    // { id: 7, text: "List item 7" },
    // { id: 8, text: "List item 8" },
    // { id: 9, text: "List item 9" },
    // { id: 10, text: "List item 10" },
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
      {goalsList.length == 0 ? (
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={require('./assets/images/goal.png')} />
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Course Goals</Text>
        </View>
      ) : (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Your Goals</Text>
          </View>
          <View style={styles.goalsContainer}>
            <FlatList
              data={goalsList}
              renderItem={(goal) => {
                return (
                  <GoalItem goal={goal.item} onDeleteGoal={deleteGoalHandler} />
                );
              }}
              keyExtractor={(item) => item.id}
              // showsVerticalScrollIndicator={true}
            />
          </View>
        </>
      )}
      <View style={styles.buttonContainer}>
        <CustomButtom title="Add New Goal" onPress={toggleModalHandler} />
      </View>
      <GoalInput
        visible={toggleModal}
        onToggleModal={toggleModalHandler}
        onAddGoal={addGoalHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 30,
    rowGap: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  goalsContainer: {
    flex: 4,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  titleContainer: {
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignSelf: "center",
    position: "absolute",
    padding: 20,
    bottom: 0,
    height: 100,
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: "#5e0acc",
    elevation: 5,
  },
  title: { marginTop: 40, fontSize: 25, fontWeight: "bold" },
  image: {
    height: 300,
    width: 300,
  }
});
