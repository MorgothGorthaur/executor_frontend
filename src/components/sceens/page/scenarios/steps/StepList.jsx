import React from "react";
import styles from './StepList.module.css';
import Step from "./Step.jsx";
import StepForm from "../form/StepForm.jsx";

const StepList = ({scenario, setScenario, updateScenario, isStepFormOpen, setFormOpen, updateList}) => {


    const handleStepFormSubmit = (newStep) => {
        let updatedScenario;
        updatedScenario = {...scenario, steps: [...scenario.steps, newStep]};
        setScenario(updatedScenario);
        updateScenario(updatedScenario);
        updateList(updatedScenario)
        setFormOpen(false)
    }
    return (
        <div className={styles.step_list}>
            <h2>Steps:</h2>
            {scenario.steps.map((step, index) => (
                <Step step={step} index={index} scenario={scenario} setScenario={setScenario}
                      updateScenario={updateScenario}/>
            ))}

            <StepForm
                submit={handleStepFormSubmit}
                initialAction={'clickCss'}
                initialValue={''}
                isOpen={isStepFormOpen}
                setIsOpen={setFormOpen}
            />

        </div>

    )
}

export default StepList;