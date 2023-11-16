import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import IconButton from "../UI/IconButton";


const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses}/>
      
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
    flex: 1
  },

});
