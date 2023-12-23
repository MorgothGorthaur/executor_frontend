import styles from "./Step.module.css";
import StepForm from "../form/StepForm.jsx";
import changeIcon from "../../../../../assets/change.svg";
import deleteIcon from "../../../../../assets/delete.svg";
import React, {useState} from "react";


const Step = ({index, scenario, setScenario, updateScenario}) => {
    const [isStepFormOpen, setFormOpen] = useState(false);
    const handleChangeStep = () => {
        setFormOpen(true);
    };

    const handleDeleteStep = (index) => {
        const updatedScenario = {...scenario};
        updatedScenario.steps.splice(index, 1);
        setScenario(updatedScenario);
        updateScenario(updatedScenario);
    };

    const handleStepFormSubmit = (newStep) => {
        let updatedScenario;
        updatedScenario = {...scenario};
        updatedScenario.steps[index] = newStep;
        setScenario(updatedScenario);
        updateScenario(updatedScenario);
        setFormOpen(false);
    };

    return (
        <div key={index} className={styles.step_box}>
            <div className={styles.step_content}>

                    <StepForm
                        submit={handleStepFormSubmit}
                        initialAction={scenario.steps[index].action}
                        initialValue={scenario.steps[index].value}
                        isOpen={isStepFormOpen}
                        setIsOpen={setFormOpen}
                    />

                {!isStepFormOpen &&(
                    <div>
                        {scenario.steps[index].action}
                        <p/>
                        {scenario.steps[index].value}
                        <p/>
                        <div>
                            <button
                                className={styles.button}
                                onClick={() => handleChangeStep(index)}
                            >
                                <img src={changeIcon} alt="Change"/>
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => handleDeleteStep(index)}
                            >
                                <img src={deleteIcon} alt="Delete"/>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Step;