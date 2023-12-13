import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";

export default function GoalItem({text, deleteGoal, id}) {
  return (
    <TouchableOpacity onPress={() => deleteGoal(id)}>
      <View style={styles.goalItem}>
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    color: "white",
  },
});
