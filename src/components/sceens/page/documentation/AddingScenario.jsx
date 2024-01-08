import React from 'react';
import styles from './Page.module.css'
import scenarios from '../../../../assets/screens/Scenarios.png'
import newScenario from '../../../../assets/screens/NewScenario.png'
import scenarioForm from '../../../../assets/screens/ScenarioForm.png'
import createdScenario from '../../../../assets/screens/CreatedScenario.png'

const AddingScenario = () => {
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <h3> Creating Scenario </h3>
            </div>
            <p>
                To create a new scenario, navigate to the "Scenarios" tab and click on the "New Scenario" button in the
                menu.
            </p>
            <div className={styles.img}>
                <img src={scenarios}/>
            </div>
            <div className={styles.img}>
                <img src={newScenario}/>
            </div>
            <p>
                In the appearing form, enter the scenario name and the website you want to test.
            </p>
            <div className={styles.img}>
                <img src={scenarioForm}/>
            </div>
            <p>
                After clicking the "Submit" button, the scenario will appear.
            </p>
            <div className={styles.img}>
                <img src={createdScenario}/>
            </div>
        </div>
    )
}
export default AddingScenario