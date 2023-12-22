import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import Loading from "../components/UI/Loading";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      // setData(expenses);
      expensesCtx.setExpenses(expenses);
    }

    getExpenses();
  }, []);

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
