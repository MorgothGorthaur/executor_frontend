import React from 'react';
import styles from './FullScenario.module.css';

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
                        <button>
                            Button 1
                        </button>
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
                                    <div className={styles.step_action}>
                                        {step.action}
                                    </div>
                                    <div className={styles.step_value}>
                                        {step.value}
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
