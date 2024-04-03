import { Pressable, Text, StyleSheet } from "react-native";

function CustomButtom({ onPress, title, type }) {
  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor: type != "del" ? "#5e0acc" : "red",
      }}
      onPress={onPress}
    >
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
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});

export default CustomButtom;
