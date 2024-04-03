import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import CustomButtom from "./CustomButton";

function GoalInput({ onAddGoal, onToggleModal, visible }) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(goalText);
    setGoalText("");
  }

  return (
    <Modal
      statusBarTranslucent={true}
      transparent={true}
      visible={visible}
      animationType="fade"
    >
      <Pressable style={styles.backdrop} onPress={onToggleModal}></Pressable>

      <View style={styles.modal}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Enter your next goal</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            value={goalText}
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <CustomButtom onPress={addGoalHandler} title="Add Goal" />
            <CustomButtom onPress={onToggleModal} title="Close Modal" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, marginBottom: 15, fontWeight: "600" },
  inputContainer: {
    height: "auto",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "100%",
    padding: 8,
  },
  modal: {
    padding: 20,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#5e0acc",
    elevation: 10,
    width: "80%",
    position: "absolute",
    top: "35%",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 25,
    rowGap: 10,
  },
  backdrop: {
    flex: 1,
    width: "100%",
    backgroundColor: "#333",
    opacity: 0.8,
  },
});

export default GoalInput;
