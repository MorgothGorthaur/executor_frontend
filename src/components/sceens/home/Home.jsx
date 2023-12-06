import React, { useState } from 'react';
import Header from '../header/Header.jsx';

const contentMap = {
    scenarios: 'Scenarios content',
    reports: 'Reports content',
    documentation: 'Documentation content',
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
