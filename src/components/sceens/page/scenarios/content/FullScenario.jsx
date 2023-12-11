import React, {useEffect} from 'react';
import styles from './FullScenario.module.css';
import deleteIcon from '../../../../../assets/delete.svg'
import changeIcon from '../../../../../assets/change.svg'
import ScenarioService from "../../../../service/scenario/ScenarioService.js";

const FullScenario = ({scenario, setScenario, deleteScenario}) => {
    async function updateScenario() {
        try {
            await ScenarioService.updateScenario(scenario);
        } catch (error) {
            console.error('Error updating scenario:', error);
        }
    }

    const handleClose = () => {
        setScenario(null);
    };

    const handleDeleteStep = (index) => {
        const updatedScenario = {...scenario};
        updatedScenario.steps.splice(index, 1);
        setScenario(updatedScenario);
        updateScenario();
    };

    return (
        <div className={styles.full_scenario_overlay}>
            <div className={styles.full_scenario_content}>
                <button className={styles.close_button} onClick={handleClose}>
                    x
                </button>

                <div className={styles.content}>
                    <div className={styles.left_box}>
                        <button className={styles.add_step_button}>add step</button>
                    </div>
                    <div className={styles.center_box}>
                        <div className={styles.box_container}>
                            <div className={styles.scenario_box}>
                                <div className={styles.scenario_name}>{scenario.name}</div>
                                <div className={styles.scenario_site}>{scenario.site}</div>
                                <div>
                                    <button className={styles.button} >
                                        <img src={changeIcon} alt="Change"/>
                                    </button>
                                    <button className={styles.button} onClick={() => {
                                        deleteScenario(scenario.id)
                                        setScenario(null)
                                    }}>
                                        <img src={deleteIcon} alt="Delete"/>
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
                                        <p/>
                                        {step.value}
                                        <p/>
                                        <div>
                                            <button className={styles.button}>
                                                <img src={changeIcon} alt="Change"/>
                                            </button>
                                            <button className={styles.button}
                                                    onClick={() => handleDeleteStep(index)}>
                                                <img src={deleteIcon} alt="Delete"/>
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
        </div>
    );
};

export default FullScenario;
