import { useState } from 'react';
import NetWorthItem from './NetWorthItem'
import CircleQuestionMark from './CircleQuestionMark';

function NetWorthGroup({ category, items, onTotalChange, hoverText }) {
    const [total, setTotal] = useState(0);

    const handleTotalChange = (newTotal) => {
        setTotal(newTotal);
        onTotalChange(newTotal);
    }

    return (
        <div>
            <h2>{category} <CircleQuestionMark hoverText={hoverText} /> </h2>
            <NetWorthItem category={category} items={items} onTotalChange={handleTotalChange} />
        </div>
    );
}

export default NetWorthGroup;
