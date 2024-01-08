import React, { useState } from 'react';
import Header from '../header/Header.jsx';
import Scenarios from "../page/scenarios/Scenarios.jsx";
import Reports from "../page/reports/Reports.jsx";
import Documentation from "../page/documentation/Documentation.jsx";

const contentMap = {
    scenarios: <Scenarios/>,
    reports: <Reports/>,
    documentation: <Documentation/>,
};

const Home = () => {
    const [content, setContent] = useState(contentMap["scenarios"]);

    const handleButtonClick = (buttonType) => {
        setContent(contentMap[buttonType]);
    };

    return (
        <div>
            <div>
                <Header onButtonClick={handleButtonClick} />
            </div>
            <div>
                {content}
            </div>
        </div>
    );
};

export default Home;
