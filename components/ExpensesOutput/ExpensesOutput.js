import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 45.99,
    date: new Date("2023-11-8"),
  },
  {
    id: "e2",
    description: "A Long coat",
    amount: 99.99,
    date: new Date("2023-11-5"),
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
    amount: 7.99,
    date: new Date("2021-10-1"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
