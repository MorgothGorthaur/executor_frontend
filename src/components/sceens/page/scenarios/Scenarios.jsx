import React, {useState} from 'react';
import Menu from './menu/Menu.jsx';
import styles from './Scenarios.module.css';
import FullScenario from "./content/FullScenario.jsx";
import deleteIcon from "../../../../assets/delete.svg";
import viewIcon from "../../../../assets/view.svg";
import ScenarioService from "../../../service/scenario/ScenarioService.js";


const Scenarios = () => {
    const [scenarios, setScenarios] = useState([]);
    const [selectedScenario, setSelectedScenario] = useState(null);

    const handleScenarioClick = (scenario) => {
        setSelectedScenario(scenario);
    };

    async function handleDeleteScenario(id) {
        try {
            const deletedScenario = scenarios.find(scenario => scenario.id === id);
            await ScenarioService.deleteScenario(deletedScenario);
            const updatedScenarios = scenarios.filter(existingScenario => existingScenario.id !== id);
            setScenarios(updatedScenarios);
        } catch (error) {
            console.error('Error deleting scenario:', error);
        }
    }

    const updateList = (updatedScenario) => {
        setScenarios((prevScenarios) =>
            prevScenarios.map((scenario) =>
                scenario.id === updatedScenario.id ? updatedScenario : scenario
            )
        );
    };
    return (
        <div className={styles.scenarios_container}>
            <div>
                <Menu setScenarios={setScenarios}/>
            </div>
            <div className={styles.scenarios_list}>
                {scenarios.map((scenario, index) => (
                    <div
                        key={index}
                        className={styles.scenario_box}
                    >
                        <div className={styles.scenario_name}>{scenario.name}</div>
                        <div>{scenario.site}</div>
                        <div>
                            <button className={styles.button} onClick={() => {
                                handleScenarioClick(scenario)
                            }}>
                                <img src={viewIcon} alt="View"/>
                            </button>
                            <button className={styles.button} onClick={() => handleDeleteScenario(scenario.id)}>
                                <img src={deleteIcon} alt="Delete"/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedScenario && (
                <FullScenario scenario={selectedScenario} setScenario={setSelectedScenario}
                              deleteScenario={handleDeleteScenario} updateList={updateList}/>
            )}
        </div>
    );
};

export default Scenarios;
