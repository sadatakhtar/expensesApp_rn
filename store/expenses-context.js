import { createContext, useReducer } from "react";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     description: "A pair of shoes",
//     amount: 45.99,
//     date: new Date("2023-12-8"),
//   },
//   {
//     id: "e2",
//     description: "A Long coat",
//     amount: 99.99,
//     date: new Date("2023-01-5"),
//   },
//   {
//     id: "e3",
//     description: "An umbrella",
//     amount: 5.99,
//     date: new Date("2020-11-1"),
//   },
//   {
//     id: "e4",
//     description: "A Book",
//     amount: 17.5,
//     date: new Date("2021-10-1"),
//   },
//   {
//     id: "e5",
//     description: "Playstation 5",
//     amount: 445.99,
//     date: new Date("2023-11-15"),
//   },
//   {
//     id: "e6",
//     description: "Modern Warfare 3",
//     amount: 99.99,
//     date: new Date("2023-11-11"),
//   },
//   {
//     id: "e7",
//     description: "Ps5 Controller",
//     amount: 55.99,
//     date: new Date("2023-11-14"),
//   },
//   {
//     id: "e8",
//     description: "A Book Case",
//     amount: 17.5,
//     date: new Date("2021-10-1"),
//   },
// ];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ descrition, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { descrition, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "SET":
      return action.payload;
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

export function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
