import React, {useEffect, useState} from 'react';
import styles from './FullScenario.module.css';
import deleteIcon from '../../../../../assets/delete.svg'
import changeIcon from '../../../../../assets/change.svg'
import ScenarioService from "../../../../service/scenario/ScenarioService.js";
import StepForm from "../form/StepForm.jsx";
import ScenarioForm from "../form/ScenarioForm.jsx";
const FullScenario = ({ scenario, setScenario, deleteScenario, updateList }) => {
    const [isStepFormOpen, setFormOpen] = useState(false);
    const [stepFormMode, setStepFormMode] = useState('add');
    const [isScenarioFormOpen, setScenarioFormOpen] = useState(false);
    const [selectedStepIndex, setSelectedStepIndex] = useState(null);

    async function updateScenario(updatedScenario) {
        try {
            await ScenarioService.updateScenario(updatedScenario);
        } catch (error) {
            console.error('Error updating scenario:', error);
        }
    }

    const handleClose = () => {
        setScenario(null);
    };

    const handleDeleteStep = (index) => {
        const updatedScenario = { ...scenario };
        updatedScenario.steps.splice(index, 1);
        setScenario(updatedScenario);
        updateScenario(updatedScenario);
    };

    const handleAddStep = () => {
        setStepFormMode('add');
        setFormOpen(true);

    };

    const handleChangeStep = (index) => {
        setStepFormMode('change');
        setSelectedStepIndex(index);
        setFormOpen(true);
    };

    const handleChangeScenario = () => {
        setScenarioFormOpen(true)
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
    const handleStepFormSubmit = (newStep) => {
        let updatedScenario;
        if (stepFormMode === 'add') {
            updatedScenario = { ...scenario, steps: [...scenario.steps, newStep] };
        } else {
            updatedScenario = { ...scenario };
            updatedScenario.steps[selectedStepIndex] = newStep;
        }
        setScenario(updatedScenario);
        updateScenario(updatedScenario);
        setFormOpen(false);
    };

    const handleEscPress = (e) => {
        if (e.key === 'Escape') {
            setFormOpen(false);
            setScenarioFormOpen(false)
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleEscPress);
        return () => {
            window.removeEventListener('keydown', handleEscPress);
        };
    }, []);

    return (
        <div className={styles.full_scenario_overlay}>
            <div className={styles.full_scenario_content}>
                <button className={styles.close_button} onClick={handleClose}>
                    x
                </button>

                <div className={styles.content}>
                    <div className={styles.left_box}>
                        <button className={styles.add_step_button} onClick={handleAddStep}>
                            Add Step
                        </button>
                    </div>
                    <div className={styles.center_box}>
                        <div className={styles.box_container}>
                            <div className={styles.scenario_box}>
                                <div className={styles.scenario_name}>{scenario.name}</div>
                                <div className={styles.scenario_site}>{scenario.site}</div>
                                <div>
                                    <button
                                        className={styles.button}
                                        onClick={() => handleChangeScenario()}
                                    >
                                        <img src={changeIcon} alt="Change" />
                                    </button>
                                    <button
                                        className={styles.button}
                                        onClick={() => {
                                            deleteScenario(scenario.id);
                                            setScenario(null);
                                        }}
                                    >
                                        <img src={deleteIcon} alt="Delete" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.step_list}>
                            <h2>Steps:</h2>
                            {scenario.steps.map((step, index) => (
                                <div key={index} className={styles.step_box}>
                                    <div className={styles.step_content}>
                                        {step.action}
                                        <p />
                                        {step.value}
                                        <p />
                                        <div>
                                            <button
                                                className={styles.button}
                                                onClick={() => handleChangeStep(index)}
                                            >
                                                <img src={changeIcon} alt="Change" />
                                            </button>
                                            <button
                                                className={styles.button}
                                                onClick={() => handleDeleteStep(index)}
                                            >
                                                <img src={deleteIcon} alt="Delete" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.right_box}>
                        <h1>gg</h1>
                    </div>
                </div>
            </div>
            {isStepFormOpen && (
                <StepForm
                    submit={handleStepFormSubmit}
                    initialAction={stepFormMode === 'change' ? scenario.steps[selectedStepIndex].action : 'clickCss'}
                    initialValue={stepFormMode === 'change' ? scenario.steps[selectedStepIndex].value : ''}
                />
            )}

            {isScenarioFormOpen && (
                <ScenarioForm
                    submit={handleScenarioFormSubmit}
                    initialName={scenario.name}
                    initialSite={scenario.site}
                />
            )}


        </div>
    );
};

export default FullScenario;