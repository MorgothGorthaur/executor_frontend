import Menu from "./menu/Menu.jsx";
import {useState} from "react";
import styles from './Scenarios.module.css'
const Scenarios = () => {
    const [scenarios, setScenarios] = useState([])
    return (
        <div className={styles.scenarios_container}>
            <div>
                <Menu setScenarios={setScenarios} />
            </div>
            <div className={styles.scenarios_list}>
                {scenarios.map((scenario, index) => (
                    <div key={index} className={styles.scenario_box}>
                        <div className={styles.scenario_name}>{scenario.name}</div>
                        <div>{scenario.site}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Scenarios