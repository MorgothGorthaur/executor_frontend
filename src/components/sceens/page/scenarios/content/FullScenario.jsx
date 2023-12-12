import React, {useEffect, useState} from 'react';
import styles from './FullScenario.module.css';
import deleteIcon from '../../../../../assets/delete.svg'
import changeIcon from '../../../../../assets/change.svg'
import ScenarioService from "../../../../service/scenario/ScenarioService.js";
import StepForm from "../form/StepForm.jsx";
const FullScenario = ({ scenario, setScenario, deleteScenario }) => {
    const [isFormOpen, setFormOpen] = useState(false);
    const [formMode, setFormMode] = useState('add'); // 'add' or 'change'
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
        setFormMode('add');
        setFormOpen(true);

    };

    const handleChangeStep = (index) => {
        setFormMode('change');
        setSelectedStepIndex(index);
        setFormOpen(true);
    };

    const handleFormSubmit = (newStep) => {
        let updatedScenario;
        if (formMode === 'add') {
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
                                        onClick={() => handleChangeStep()}
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
            {isFormOpen && (
                <StepForm
                    submit={handleFormSubmit}
                    initialAction={formMode === 'change' ? scenario.steps[selectedStepIndex].action : 'clickCss'}
                    initialValue={formMode === 'change' ? scenario.steps[selectedStepIndex].value : ''}
                />
            )}
        </div>
    );
};

export default FullScenario;