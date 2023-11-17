import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 45.99,
    date: new Date("2023-12-8"),
  },
  {
    id: "e2",
    description: "A Long coat",
    amount: 99.99,
    date: new Date("2023-01-5"),
  },
  {
    id: "e3",
    description: "An umbrella",
    amount: 5.99,
    date: new Date("2020-11-1"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 17.5,
    date: new Date("2021-10-1"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 45.99,
    date: new Date("2023-11-8"),
  },
  {
    id: "e6",
    description: "A Long coat",
    amount: 99.99,
    date: new Date("2023-11-5"),
  },
  {
    id: "e7",
    description: "An umbrella",
    amount: 5.99,
    date: new Date("2020-11-1"),
  },
  {
    id: "e8",
    description: "A Book",
    amount: 17.5,
    date: new Date("2021-10-1"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ descrition, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { descrition, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
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
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}