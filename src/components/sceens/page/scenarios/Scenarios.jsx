import React, {useState} from 'react';
import Menu from './menu/Menu.jsx';
import styles from './Scenarios.module.css';
import FullScenario from "./content/FullScenario.jsx";
import deleteIcon from "../../../../assets/delete.svg";
import viewIcon from "../../../../assets/view.svg";
import ScenarioService from "../../../service/scenario/ScenarioService.js";
import ScenarioForm from "./form/ScenarioForm.jsx";


const Scenarios = () => {
    const [scenarios, setScenarios] = useState([]);
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
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

    
    async function findAll(currentPage, pageSize) {
        return await ScenarioService.findAll(currentPage -1, pageSize)
    }

    async function findBySite(searchText, currentPage, pageSize){
        const encodeSite = searchText.replace(/ /g, '')
        return await ScenarioService.findBySite(encodeSite, currentPage -1, pageSize)
    }

    async function findByName(searchText, currentPage, pageSize){
        const encodedName = searchText.replace(/ /g, '');
        return await ScenarioService.findByName(encodedName, currentPage -1, pageSize)
    }
    
    async function addScenario(name, site) {
        await ScenarioService.addScenario({name, site})
        const newList = await findByName(name, 1,10)
        setScenarios(newList.content)
        setIsFormOpen(false)
    }
    return (
        <div className={styles.scenarios_container}>
            <div>
                <Menu setScenarios={setScenarios}
                      setIsFormOpen={setIsFormOpen}
                      findAll={findAll}
                      findBySite={findBySite}
                      findByName={findByName}
                />
            </div>
            <div className={styles.scenarios_list}>
                <div className={styles.form}>
                    <ScenarioForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} submit={addScenario}/>
                </div>
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
