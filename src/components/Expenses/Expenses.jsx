import { useState } from "react";
import "../styles/expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "../NewExpenses/ExpensesChart";
const Expenses = (props) => {
    const expenses = props.items;
    const [year, setYear] = useState("");
    const addFilter = (pickedYear) => {
        setYear(pickedYear);
    };
    const filteredYear = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <div className="expenses">
            <ExpensesFilter selected={year} onAddFilter={addFilter} />
            <ExpensesChart expenses={filteredYear}/>
            <ExpenseList items={filteredYear}/>
        </div>
    );
};

export default Expenses;
