import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
  Text,
  Image
} from "react-native";

const GoalInput = ({ goalInput, addGoal, enteredGoal, showModal, closeModal }) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal"
          placeholderTextColor="#999"
          onChangeText={goalInput}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={closeModal}>
            <Text style={styles.buttonText} >Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.addButton]}
            onPress={addGoal}
          >
            <Text style={styles.buttonText}>Add Goal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    paddingHorizontal: 30,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
    color: "white"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
  },
  addButton: {
    backgroundColor: "#841584",
  },
  cancelButton: {
    backgroundColor: "#ff0000",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
