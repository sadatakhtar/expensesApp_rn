import { StyleSheet, Text, TextInput, View } from "react-native";
import React, {useState, useLayoutEffect, useContext } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpenses, updateExpense, deleteExpense } from "../utils/http";
import Loading from "../components/UI/Loading";

const ManageExpense = ({ route, navigation }) => {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // <--- turns undefined to boolean

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    setIsFetching(true);
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add New Expense",
    });
    setIsFetching(false);
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsFetching(true)
    await deleteExpense(editedExpenseId);
    expensesCtx.deleteExpense(editedExpenseId);
    setIsFetching(false);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    if (isEditing) {
      setIsFetching(true);
      expensesCtx.updateExpense(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId, expenseData);
      setIsFetching(false)
    } else {
      setIsFetching(true);
      const id = await storeExpenses(expenseData);
      expensesCtx.addExpense({...expenseData, id: id});
      setIsFetching(false);
    }
    navigation.goBack();
  }

  if(isFetching) {
    return  <Loading />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        submitBtnLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />

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
});
