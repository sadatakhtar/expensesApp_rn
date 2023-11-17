import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Input from "./Input";

const ExpenseForm = () => {
  function amountChangeHandler() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input label="Date" textInputConfig={{
        placeholder: 'YYYY-MM-DD',
        maxLength: 10,
        onChangeText: () => {}
      }}/>
      <Input label="Description" textInputConfig={{
        keyboardType: 'default',
        multiline: true,
        // autoCorrect: true,
        // autoCapitalize: 'sentences',
        onChangeText: () => {},
      }}/>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
