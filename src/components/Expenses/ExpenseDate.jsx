import "../styles/expenseDate.css"

const ExpenseDate = ({date}) => {
    const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const day = date.getDate();
    const month = monthsArray[date.getMonth()];
    const year = date.getFullYear();
    return (
        <div className="expense-item__date">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="day">{day}</div>
        </div>
    );
};

export default ExpenseDate;
