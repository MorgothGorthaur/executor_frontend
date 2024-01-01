import styles from "./FullReport.module.css";
import React from "react";
import StepList from "../steps/StepList.jsx";
import saveIcon from "../../../../../assets/save.svg";

const FullReport = ({report, setReport}) => {
    const formatDateTime = (date) => {
        const f = date.toString().split(',')
        return `${f[0]}/${f[1]}/${f[2]} ${f[3]}:${f[4]}:${f[5]}`;
    };
    const downloadReport = (report) => {
        const blob = new Blob([JSON.stringify(report)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'report.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className={styles.full_report_overlay}>
            <div className={styles.full_report_content}>
                <button className={styles.close_button} onClick={() => setReport(null)}>
                    x
                </button>
                <div className={styles.content}>
                    <div className={styles.box}>
                        <div className={styles.box_container}>
                            <table className={styles.table}>
                                <div className={styles.info}>
                                    <caption className={styles.tableCaption}>Scenario Report</caption>
                                    <button
                                        className={styles.button}
                                        onClick={() => downloadReport(report)}
                                    >
                                        <img src={saveIcon} alt="Download Report"/>
                                    </button>
                                </div>
                                <tbody>
                                <tr>
                                    <td className={styles.tableCell}>name</td>
                                    <td className={styles.tableCell}>{report.name}</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableCell}>site</td>
                                    <td className={styles.tableCell}>{report.site}</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableCell}>startTime</td>
                                    <td className={styles.tableCell}>{formatDateTime(report.startTime)}</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableCell}>endTime</td>
                                    <td className={styles.tableCell}>{formatDateTime(report.endTime)}</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableCell}>errorMessage</td>
                                    <td className={styles.tableCell}>{report.errorMessage}</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableCell}>webDriverInfo</td>
                                    <td className={styles.tableCell}>{report.webDriverInfo}</td>
                                </tr>
                                </tbody>
                            </table>
                            <StepList steps={report.stepReports}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FullReport;