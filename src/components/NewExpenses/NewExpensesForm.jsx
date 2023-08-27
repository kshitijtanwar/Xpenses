import "../styles/newExpensesForm.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };
    const cancelHandler = (e) => {
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!enteredTitle || !enteredAmount || !enteredDate) {
            alert("Please add an Expense");
            return;
        }
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
    };

    return (
        <form className="row g-3" onSubmit={submitHandler}>
            <div className="col-md-6">
                <label className="form-label text-light">Title</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={titleChangeHandler}
                    value={enteredTitle}
                    placeholder="Add an expense"
                />
            </div>

            <div className="col-md-2">
                <label className="form-label text-light">Amount</label>
                <input
                    type="number"
                    className="form-control"
                    onChange={amountChangeHandler}
                    value={enteredAmount}
                    placeholder="0.00"
                />
            </div>
            <div className="col-md-6">
                <label className="form-label text-light">Date</label>
                <input
                    type="date"
                    className="form-control"
                    min="2019-01-01"
                    max="2023-12-31"
                    onChange={dateChangeHandler}
                    value={enteredDate}
                />
            </div>
            <div style={{ display: "flex", gap: "1rem", flexDirection:"row-reverse" }}>
                <button type="submit" className="btn btn-primary">
                    Add Expense
                </button>

                <button type="reset" className="btn btn-primary" onClick={cancelHandler}>
                    Cancel
                </button>
            </div>
        </form>
    );
};
export default NewExpenseForm;
