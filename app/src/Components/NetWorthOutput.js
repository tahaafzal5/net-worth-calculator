import CircleQuestionMark from "./CircleQuestionMark";

function NetWorthOutput({ title, assetsTotal, liabilitiesTotal }) {
    const assets = parseFloat(assetsTotal) || 0;
    const liabilities = parseFloat(liabilitiesTotal) || 0;

    const netWorth = (assets - liabilities).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <div>
            <h2>{title} <CircleQuestionMark /></h2>
            {netWorth}
        </div>
    );
}

export default NetWorthOutput;