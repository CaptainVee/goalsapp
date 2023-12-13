import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function goalInputHandler(text) {
    setEnteredGoal(text);
  }
  function addGoalHandler() {
    if (enteredGoal.trim().length === 0) {
      // Don't add empty goals
      return;
    }
    // Update courseGoals with the new goal
    setCourseGoals((prevCourseGoals) => [
      ...prevCourseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setEnteredGoal("");
    setModalIsVisible(false)
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((prevCourseGoals) =>
      prevCourseGoals.filter((goal) => goal.id !== goalId)
    );
  }

  return (
    <>
    <StatusBar style="light" backgroundColor="#1e085a" />
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#a065ec" onPress={()=> setModalIsVisible(true)} />
      {modalIsVisible && (
        <GoalInput
          goalInput={goalInputHandler}
          addGoal={addGoalHandler}
          enteredGoal={enteredGoal}
          showModal={modalIsVisible}
          closeModal={() => (setModalIsVisible(false))}
        />
      )}
      <View style={styles.goalsContainer}>
        <Text>List of goals..</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                deleteGoal={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },
  goalsContainer: {
    flex: 5,
  },
});
