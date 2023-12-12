import React, { useState } from 'react';
import styles from './Form.module.css';

const StepForm = ({ submit, initialAction = '', initialValue = '' }) => {
    const [action, setAction] = useState(initialAction);
    const [value, setValue] = useState(initialValue);

    const handleSubmit = () => {
        if (!action || !value) {
            alert('Please fill in all fields.');
            return;
        }

        submit({ action, value });
        setAction('');
        setValue('');
    };

    return (
        <div className={styles.formBox}>
            <div className={styles.formContainer}>
                <label className={styles.formLabel}>Action:</label>
                <select
                    className={styles.formSelect}
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                >
                    <option value="clickCss">clickCss</option>
                    <option value="clickXpath">clickXpath</option>
                    <option value="sleep">sleep</option>
                </select>
                <label className={styles.formLabel}>Value:</label>
                <input
                    type="text"
                    className={styles.formInput}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className={styles.formButton} onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default StepForm;