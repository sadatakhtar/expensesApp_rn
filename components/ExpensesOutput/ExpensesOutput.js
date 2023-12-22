import { StyleSheet, View, Text, Appearance } from "react-native";
import React, { useState, useEffect } from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import IconButton from "../UI/IconButton";

const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText }) => {
  const [currColorScheme, setCurrColorScheme] = useState(Appearance.getColorScheme())
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setCurrColorScheme(colorScheme)
      // if (colorScheme === "dark") {
      //   console.log("Dark side");
      // } else {
      //   console.log("Light side");
      // }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const lightModeStyles = StyleSheet.create({
    container: {
      paddingTop: 24,
      paddingHorizontal: 24,
      paddingBottom: 0,
      backgroundColor: GlobalStyles.colors.primary700,
      flex: 1,
    },
    // Rest of the styles...
  });

  const darkModeStyles = StyleSheet.create({
    container: {
      paddingTop: 24,
      paddingHorizontal: 24,
      paddingBottom: 0,
      backgroundColor: 'red', // Change this to the desired dark mode color
      flex: 1,
    },
    // Rest of the styles...
  });

  const selectedStyles = currColorScheme === 'light' ? lightModeStyles : darkModeStyles;

  const styles = StyleSheet.create({
    container: {
      paddingTop: 24,
      paddingHorizontal: 24,
      paddingBottom: 0,
      backgroundColor:
        currColorScheme === "light" ? GlobalStyles.colors.primary700 : "red",
      flex: 1,
    },
    messageContainer: {
      flex: 1,
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
    },
    messageText: {
      color: "white",
      fontSize: 16,
      textAlign: "center",
    },
  });
  

  let noExpenseMessage = (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{fallBackText}</Text>
    </View>
  );

  return (
    <View style={selectedStyles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses.length < 1 ? (
        noExpenseMessage
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </View>
  );
};

export default ExpensesOutput;

