import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx =  useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // <--- turns undefined to boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add New Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if(isEditing){
      expensesCtx.updateExpense(editedExpenseId,{description: 'Test!!!', amount: 9.99, date: new Date('2023-11-10')});
    } else {
      expensesCtx.addExpense({description: 'Test', amount: 19.99, date: new Date('2023-05-19')});
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.customBtn}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>

      {isEditing && (
        <View style={styles.btnContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={24}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  btnContainer: {
    borderTopColor: GlobalStyles.colors.primary200,
    borderTopWidth: 2,
    marginTop: 16,
    paddingTop: 8,
    alignItems: "center",
  },
  customBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
