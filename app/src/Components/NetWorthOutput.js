import circleQuestionMark from '../Assets/Images/circle-question-mark.png';

function NetWorthOutput({ title, assetsTotal, liabilitiesTotal }) {
    const assets = parseFloat(assetsTotal) || 0;
    const liabilities = parseFloat(liabilitiesTotal) || 0;

    const netWorth = (assets - liabilities).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <div>
            <h2>{title} <img src={circleQuestionMark} width={15} alt='question mark' /> </h2>
            {netWorth}
        </div>
    );
}

export default NetWorthOutput;