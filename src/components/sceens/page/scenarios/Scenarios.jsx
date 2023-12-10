import React, { useState } from 'react';
import Menu from './menu/Menu.jsx';
import styles from './Scenarios.module.css';
import FullScenario from "./content/FullScenario.jsx";


const Scenarios = () => {
    const [scenarios, setScenarios] = useState([]);
    const [selectedScenario, setSelectedScenario] = useState(null);

    const handleScenarioClick = (scenario) => {
        setSelectedScenario(scenario);
    };

    return (
        <div className={styles.scenarios_container}>
            <div>
                <Menu setScenarios={setScenarios} />
            </div>
            <div className={styles.scenarios_list}>
                {scenarios.map((scenario, index) => (
                    <div
                        key={index}
                        className={styles.scenario_box}
                        onClick={() => handleScenarioClick(scenario)}
                    >
                        <div className={styles.scenario_name}>{scenario.name}</div>
                        <div>{scenario.site}</div>
                    </div>
                ))}
            </div>
            {selectedScenario && (
                <FullScenario scenario={selectedScenario} setScenario={setSelectedScenario} />
            )}
        </div>
    );
};

export default Scenarios;
