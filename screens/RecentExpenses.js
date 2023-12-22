import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import Loading from "../components/UI/Loading";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses')
      }
      setIsFetching(false);
      // setData(expenses);
  
    }

    getExpenses();
  }, []);

  function errorHandler() {
    setError(null)
  }

  if(error && !isFetching){
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>

  }

  if(isFetching) { 
    return <Loading />
  }

  const recentEx = expensesCtx.expenses.filter((ex) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return ex.date >= date7DaysAgo && ex.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentEx}
      expensesPeriod="Last 7 Days"
      fallBackText="No expenses registered in the last 7 days."
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
