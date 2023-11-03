import { useState } from 'react';
import NetWorthItem from './NetWorthItem'
import circleQuestionMark from '../Assets/Images/circle-question-mark.png';

function NetWorthGroup({ category, items, onTotalChange }) {
    const [total, setTotal] = useState(0);

    const handleTotalChange = (newTotal) => {
        setTotal(newTotal);
        onTotalChange(newTotal);
    }

    return (
        <div>
            <h2>{category} <img src={circleQuestionMark} width={15} alt='question mark' /> </h2>
            <NetWorthItem category={category} items={items} onTotalChange={handleTotalChange} />
        </div>
    );
}

export default NetWorthGroup;
