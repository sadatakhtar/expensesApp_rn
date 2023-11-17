import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, textInputConfig }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
