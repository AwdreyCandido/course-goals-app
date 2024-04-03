import { Pressable, Text, StyleSheet } from "react-native";

function CustomButtom({ onPress, title }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    padding: 14,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});

export default CustomButtom;
