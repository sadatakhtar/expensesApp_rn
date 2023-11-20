import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

const ExpenseForm = () => {
  function amountChangeHandler() {}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInputs}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          style={styles.rowInputs}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          keyboardType: "default",
          multiline: true,
          // autoCorrect: true,
          // autoCapitalize: 'sentences',
          onChangeText: () => {},
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInputs: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24
  }
});
