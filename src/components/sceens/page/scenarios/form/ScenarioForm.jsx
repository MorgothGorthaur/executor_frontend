import React, {useState, useEffect} from 'react';
import styles from './Form.module.css';

const ScenarioForm = ({submit, initialName = '', initialSite = '', isOpen, setIsOpen}) => {
    const [name, setName] = useState(initialName)
    const [site, setSite] = useState(initialSite)

    const handleEscPress = (e) => {
        if (e.key === 'Escape') {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleEscPress);
        return () => {
            window.removeEventListener('keydown', handleEscPress);
        };
    }, [])
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
        <>
            {isOpen && (
                <div className={styles.formContainer}>
                    <label className={styles.formLabel}>Action:</label>
                    <input
                        type="text"
                        className={styles.formInput}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label className={styles.formLabel}>Value:</label>
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
            )}
        </>
    )

}

export default ScenarioForm;