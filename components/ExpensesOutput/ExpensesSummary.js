import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.periodName}>
      <Text style={styles.periodNameText}>{periodName}</Text>
      <Text style={styles.amount}>£{expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  periodName: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    marginHorizontal: 3,
    marginVertical: 6,
    padding: 10,
    backgroundColor: "#3e24d2",
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  periodNameText: {
    color: "white",
    fontSize: 16,
  },
  amount: {
    color: '#3e2'
  }
});
