import { View, Text, Pressable, StyleSheet, Button } from "react-native";

function GoalItem({ goal, onDeleteGoal }) {
  
  function deleteGoalHandler(id) {
    onDeleteGoal(id);
  }

  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goal.text}</Text>
      <View style={styles.buttonContainer}>
        <Button title="edit" />
        <Button color={'red'} onPress={deleteGoalHandler.bind(this, goal.id)} title="del" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    padding: 14,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    // width: "80%",
    color: "white",
    fontWeight: "500",
  },
  buttonContainer: {
    gap: 16,
    flexDirection: "row",
  },
});

export default GoalItem;
