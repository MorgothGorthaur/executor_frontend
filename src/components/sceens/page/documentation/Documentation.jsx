// Documentation.jsx

import React, {useState} from 'react';
import About from './About.jsx';
import styles from './Documentation.module.css';
import AddingScenario from "./AddingScenario.jsx";
import ManagingScenario from "./ManagingScenario.jsx";

const Documentation = () => {
    const pages = [
        {id: 'about', name: 'About', content: <About/>},
        {id: 'creating scenario', name: 'Creating Scenario', content: <AddingScenario/>},
        {id: 'managing scenario', name: 'Managing Scenario', content: <ManagingScenario/>},
    ]

    const [selectedPage, setSelectedPage] = useState(pages[0]);

    return (
        <div className={styles.documentationContainer}>
            <div className={styles.menuContainer}>
                <div>
                    <h2>Documentation Menu</h2>
                </div>
                <div className={styles.list}>
                    {pages.map(page => (
                        <li key={page.id} onClick={() => setSelectedPage(page)}>
                            {page.name}
                        </li>
                    ))}
                </div>
            </div>
            <div className={styles.contentContainer}>
                {selectedPage.content}
            </div>
        </div>
    );
};

export default Documentation;
