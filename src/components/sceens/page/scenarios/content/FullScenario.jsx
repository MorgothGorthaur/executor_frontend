import React, {useState} from 'react';
import styles from './FullScenario.module.css';
import deleteIcon from '../../../../../assets/delete.svg'
import changeIcon from '../../../../../assets/change.svg'
import plusIcon from '../../../../../assets/plus.svg'
import runIcon from '../../../../../assets/run.svg'
import ScenarioService from "../../../../service/scenario/ScenarioService.js";
import ScenarioForm from "../form/ScenarioForm.jsx";
import StepList from "../steps/StepList.jsx";
import Reports from "../reports/Reports.jsx"
import PublisherService from "../../../../service/publisher/PublisherService.js";

const FullScenario = ({scenario, setScenario, deleteScenario, updateList}) => {
    const [isStepFormOpen, setFormOpen] = useState(false);
    const [isScenarioFormOpen, setScenarioFormOpen] = useState(false);


    async function updateScenario(updatedScenario) {
        try {
            await ScenarioService.updateScenario(updatedScenario);
        } catch (error) {
            console.error('Error updating scenario:', error);
        }
    }

    const handleScenarioFormSubmit = (name, site) => {
        let updatedScenario = {...scenario}
        updatedScenario.name = name
        updatedScenario.site = site
        updateScenario(updatedScenario)
        setScenario(updatedScenario)
        setScenarioFormOpen(false)
        updateList(updatedScenario)
    }

    const publish = () => {
        PublisherService.publish(scenario)
    }

    return (
        <div className={styles.full_scenario_overlay}>
            <div className={styles.full_scenario_content}>
                <button className={styles.close_button} onClick={() => setScenario(null)}>
                    x
                </button>

                <div className={styles.content}>
                    <div className={styles.center_box}>
                        <div className={styles.box_container}>

                            <div className={styles.scenario_box}>
                                {!isScenarioFormOpen && (
                                    <div>
                                        <div className={styles.scenario_name}>
                                             {scenario.name}
                                         </div>
                                         <div className={styles.scenario_site}>
                                             {scenario.site}
                                         </div>
                                        <div>
                                            <button
                                                className={styles.button}
                                                onClick={() => setScenarioFormOpen(true)}
                                            >
                                                <img src={changeIcon} alt="Change"/>
                                            </button>
                                            <button
                                                className={styles.button}
                                                onClick={() => {
                                                    deleteScenario(scenario.id);
                                                    setScenario(null);
                                                }}
                                            >
                                                <img src={deleteIcon} alt="Delete"/>
                                            </button>
                                            <button
                                                className={styles.button}
                                                onClick={() => publish()}
                                            >
                                                <img src={runIcon} alt="Run"/>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                    <ScenarioForm
                                        submit={handleScenarioFormSubmit}
                                        initialName={scenario.name}
                                        initialSite={scenario.site}
                                        isOpen={isScenarioFormOpen}
                                        setIsOpen={setScenarioFormOpen}
                                    />

                            </div>

                        </div>
                        <div>
                            <StepList scenario={scenario}
                                      setScenario={setScenario}
                                      updateScenario={updateScenario}
                                      updateList={updateList}
                                      isStepFormOpen={isStepFormOpen}
                                      setFormOpen={setFormOpen}
                            />
                            <button
                                className={styles.button}
                                onClick={() => setFormOpen(true)}
                            >
                                <img src={plusIcon} alt="Add"/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.right_box}>
                        <Reports id ={scenario.id}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullScenario;