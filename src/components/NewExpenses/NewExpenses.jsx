import NewExpenseForm from "./NewExpensesForm";
import "../styles/newExpenses.css"
const NewExpenses = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            id: Date.now(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);

    }
    return (
        <div className="new-expenses">
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};
export default NewExpenses;
