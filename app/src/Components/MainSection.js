import { useState } from 'react';
import '../Styles/MainSection.css';
import NetWorthGroup from './NetWorthGroup.js'
import NetWorthOutput from './NetWorthOutput.js'

function MainSection() {
    const assets = ['Checking Accounts', 'Savings Accounts', 'Money Market Accounts', "CDs", "Bonds", "Other"];
    const liabilities = ["Credit Card Balances", "Outstanding Bills", "Home Mortgage", "Car Loans", "Student Loans", "Other"];
    const [assetsTotal, setAssetsTotal] = useState(0);
    const [liabilitiesTotal, setLiabilitiesTotal] = useState(0);

    const Category = {
        ASSETS: 'Assets',
        LIABILITIES: 'Liabilities',
    };

    const handleTotalChange = (category, total) => {
        if (category === Category.ASSETS) {
            setAssetsTotal(total);
        } else if (category === Category.LIABILITIES) {
            setLiabilitiesTotal(total);
        }
    };
    return (
        <div className="main-section">
            <NetWorthGroup category={Category.ASSETS} items={assets} onTotalChange={(total) => handleTotalChange(Category.ASSETS, total)} />
            <NetWorthGroup category={Category.LIABILITIES} items={liabilities} onTotalChange={(total) => handleTotalChange(Category.LIABILITIES, total)} />
            <NetWorthOutput title="Net Worth" assetsTotal={assetsTotal} liabilitiesTotal={liabilitiesTotal} />
        </div>
    );
}

export default MainSection;
