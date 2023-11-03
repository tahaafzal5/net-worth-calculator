import { useState } from 'react';
import '../Styles/NetWorthItem.css';

function NetWorthItem({ items, onTotalChange }) {
    const [itemValues, setItemValues] = useState(Array(items.length));

    const handleItemInputChange = (event, index) => {
        const newValues = [...itemValues]
        newValues[index] = event.target.value;
        setItemValues(newValues);
    };

    const calculateTotal = () => {
        const total = itemValues.reduce((sum, value) => {
            const numericValue = parseFloat(value);
            return !isNaN(numericValue) ? sum + numericValue : sum;
        }, 0);

        onTotalChange(total);
        return total.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    return (
        <div>
            <div className="net-worth-item">
                <ul className='unordered-list'>
                    {items.map((item, index) => (
                        <li key={index}>
                            <div>
                                {item}:
                            </div>
                            <div>
                                <input
                                    value={itemValues[index]}
                                    onChange={(event) => handleItemInputChange(event, index)}
                                    onKeyDown={(event) => {
                                        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
                                        if (!allowedKeys.includes(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                Total: {calculateTotal()}
            </div>
        </div>
    );
}

export default NetWorthItem;
