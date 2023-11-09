import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = ({ navigation }) => {
  return <ExpensesOutput expensesPeriod="Total"/>
};

export default AllExpenses;

const styles = StyleSheet.create({});
