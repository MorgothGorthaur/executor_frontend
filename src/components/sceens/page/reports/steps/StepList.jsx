import React from "react";
import styles from "./StepList.module.css";

const StepList = ({steps}) => {
    const formatDateTime = (date) => {
        const f = date.toString().split(',')
        return `${f[0]}:${f[1]}:${f[2]}`;
    };
    return (
        <table className={styles.table}>
            <caption className={styles.tableCaption}>Step Reports</caption>
            <thead>
            <tr>
                <th className={styles.tableHeader}>Action</th>
                <th className={styles.tableHeader}>Value</th>
                <th className={styles.tableHeader}>Start Time</th>
                <th className={styles.tableHeader}>End Time</th>
                <th className={styles.tableHeader}>Error Message</th>
            </tr>
            </thead>
            <tbody>
            {steps.map((step, index) => (
                <tr key={index}>
                    <td className={styles.tableCell}>{step.action}</td>
                    <td className={styles.tableCell}>{step.value}</td>
                    <td className={styles.tableCell}>{formatDateTime(step.startTime)}</td>
                    <td className={styles.tableCell}>{formatDateTime(step.endTime)}</td>
                    <td className={styles.tableCell}>{step.errorMessage}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default StepList;