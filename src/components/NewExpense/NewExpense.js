import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [formIsShown, setFormIsShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormIsShown(false);
  };

  const addExpenseHandler = () => {
    setFormIsShown(true);
  };

  const cancelFormSubmitionHandler = () => {
      setFormIsShown(false);
  }

  return (
    <div className="new-expense">
      {!formIsShown ? (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelFormSubmitionHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
