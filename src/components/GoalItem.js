import { View, Text, StyleSheet } from "react-native";

function GoalItem({ goal }) {
  return (
    <View style={styles.goalItem}>
      <Text style={{ color: "white", fontWeight: 500 }}>{goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    padding: 14,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});

export default GoalItem;
