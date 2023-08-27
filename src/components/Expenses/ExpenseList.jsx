import ExpenseItem from "./ExpenseItem";
import "../styles/expenses.css";
const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return (
            <h4
                style={{ color: "white", textAlign: "center", padding: "1rem" }}
            >
                No content found!!
            </h4>
        );
    }

    return (
        <div>
            {props.items.map((expense) => {
                return <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id}
                />;
            })}
        </div>
    );
};
export default ExpenseList;
