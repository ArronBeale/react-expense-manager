import ExpenseDate from './expenseDate';
import Card from '../UI/Card'

import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('clicked!');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>€{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;