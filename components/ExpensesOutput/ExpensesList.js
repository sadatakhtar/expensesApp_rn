import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description}</Text>;
}
const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
