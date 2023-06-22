import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const saveFilteredYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={saveFilteredYearHandler}
          selected={filteredYear}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
