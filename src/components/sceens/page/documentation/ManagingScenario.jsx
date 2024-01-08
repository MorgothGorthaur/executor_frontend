import React from 'react';
import styles from './Page.module.css'
import addStep from '../../../../assets/screens/AddStep.png'
import newStep from '../../../../assets/screens/NewStep.png'
import fullScenario from '../../../../assets/screens/FullScenario.png'
const ManagingScenario = () => {
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <h3> Managing Scenario </h3>
            </div>
            <p>
                To add a new step, click the "Plus" icon:
            </p>
            <div className={styles.img_container}>
                <img src={addStep} className={styles.img}/>
            </div>
            <p>In the appearing menu, select the desired step type and enter the necessary value:</p>
            <div className={styles.img_container}>
                <img src={newStep} className={styles.img}/>
            </div>
            <p>
                After clicking the "Submit" button, your step will be displayed in the scenario data block,
                ready for use. Once you click the "Run" icon,
                the scenario will be executed by the server:
            </p>
            <div className={styles.img_container}>
                <img src={fullScenario} className={styles.img}/>
            </div>
            <p>
                After some time, a new report of its execution will
                appear on the right:
            </p>
        </div>
    )
}
export default ManagingScenario;