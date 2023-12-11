import React from 'react';
import styles from './FullScenario.module.css';
import deleteIcon from '../../../../../assets/delete.svg'
const FullScenario = ({scenario, setScenario}) => {
    const handleClose = () => {
        setScenario(null);
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
                        <button className={styles.remove_scenario_button}>remove scenario</button>
                    </div>
                    <div className={styles.center_box}>
                        <div className={styles.box_container}>
                            <div className={styles.scenario_box}>
                                <div className={styles.scenario_name}>{scenario.name}</div>
                                <div className={styles.scenario_site}>{scenario.site}</div>
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
                                        <button className={styles.delete_button}>
                                            <img src={deleteIcon} alt="Delete" />
                                        </button>
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
