import { StyleSheet, View, Text } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import IconButton from "../UI/IconButton";

const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText }) => {
  let noExpenseMessage = (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{fallBackText}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses.length < 1 ? (
        noExpenseMessage
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  messageText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
