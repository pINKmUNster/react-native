import React, { useState } from 'react';
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'
import { Button, StyleSheet, View, FlatList } from 'react-native';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((prev) => [...prev, {
      key: Math.random().toString(),
      value: enteredGoal
    }])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalInput placeholder={"Course goal"} onAddClick={addGoalHandler} />
      </View>
      <FlatList data={courseGoals}
        renderItem={itemData => <GoalItem value={itemData.item.value} />
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 30 },
});
