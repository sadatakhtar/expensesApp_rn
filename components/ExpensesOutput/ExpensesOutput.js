import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 45.99,
    date: new Date("2023-12-8"),
  },
  {
    id: "e2",
    description: "A Long coat",
    amount: 99.99,
    date: new Date("2023-01-5"),
  },
  {
    id: "e3",
    description: "An umbrella",
    amount: 5.99,
    date: new Date("2020-11-1"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 17.50,
    date: new Date("2021-10-1"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 45.99,
    date: new Date("2023-11-8"),
  },
  {
    id: "e6",
    description: "A Long coat",
    amount: 99.99,
    date: new Date("2023-11-5"),
  },
  {
    id: "e7",
    description: "An umbrella",
    amount: 5.99,
    date: new Date("2020-11-1"),
  },
  {
    id: "e8",
    description: "A Book",
    amount: 17.50,
    date: new Date("2021-10-1"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
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
