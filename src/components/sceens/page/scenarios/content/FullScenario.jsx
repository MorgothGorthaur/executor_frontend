// FullScenario.jsx
import React from 'react';
import styles from './FullScenario.module.css';

const FullScenario = ({ scenario, setScenario }) => {
    const handleClose = () => {
        setScenario(null);
    };

    return (
        <div className={styles['full-scenario-overlay']}>
            <div className={styles['full-scenario-content']}>
                <button className={styles['close-button']} onClick={handleClose}>
                    x
                </button>
                <div className={styles['box-container']}>
                    <div className={styles['scenario-box']}>
                        <div className={styles['scenario-name']}>{scenario.name}</div>
                    </div>
                    <div className={styles['scenario-box']}>
                        <div className={styles['scenario-site']}>{scenario.site}</div>
                    </div>
                </div>
                <div className={styles['step-list']}>
                    <h2>Steps:</h2>
                    {scenario.steps.map((step, index) => (
                        <div key={index} className={styles['step-box']}>
                            <div className={styles['step-action']}>
                                <strong>Action:</strong> {step.action}
                            </div>
                            <div className={styles['step-value']}>
                                <strong>Value:</strong> {step.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullScenario;
