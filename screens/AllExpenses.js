import { StyleSheet, Text, View, Button } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = ({ navigation }) => {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesCtx?.expenses} expensesPeriod="Total"/>
};

export default AllExpenses;

const styles = StyleSheet.create({});
