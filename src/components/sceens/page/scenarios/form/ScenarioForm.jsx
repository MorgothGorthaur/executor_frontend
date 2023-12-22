import React, {useState} from 'react';
import styles from './Form.module.css';

const ScenarioForm = ({submit, initialName = '', initialSite = ''}) => {
    const [name, setName] = useState(initialName)
    const [site, setSite] = useState(initialSite)

    const handleSubmit = () => {
        if (!name || !site) {
            alert('Please fill in all fields.');
            return;
        }
        submit(name, site);
        setName('');
        setName('');
    };

    return (
        <div className={styles.formContainer}>
            <label className={styles.formLabel}>Action:</label>
            <input
                type="text"
                className={styles.formInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                className={styles.formInput}
                value={site}
                onChange={(e) => setSite(e.target.value)}
            />
            <button className={styles.formButton} onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )

}

export default ScenarioForm;