import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from '../../constants/styles'

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses?.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.periodName}>
      <Text style={styles.periodNameText}>{periodName}</Text>
      <Text style={styles.amount}>£{expensesSum?.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  periodName: {
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: 6,
    // marginHorizontal: 3,
    // marginVertical: 6,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  periodNameText: {
    color: GlobalStyles.colors.primary400,
    fontSize: 12,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
