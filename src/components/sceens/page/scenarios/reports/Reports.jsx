import React, {useState, useEffect} from 'react';
import ReportService from "../../../../service/report/ReportService.js";
import saveIcon from "../../../../../assets/save.svg";
import styles from "./Report.module.css";


const Reports = ({id}) => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReportsById = async () => {
            try {
                const response = await ReportService.findById(id);
                setReports(response.content);
            } catch (error) {
                console.log("error loading reports" + error);
            }
        };

        fetchReportsById();
    }, [id]);

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

    const formatDateTime = (date) => {
        const f = date.toString().split(',')
        return `${f[0]}/${f[1]}/${f[2]} ${f[3]}:${f[4]}:${f[5]}`;
    };
    return (
        <div>
            <ul>
                {reports.map((report, index) => (
                    <div key={index} className={styles.block}>
                        <div className = {styles.info}>
                            <div>{formatDateTime(report.startTime)}</div>
                            <div>{formatDateTime(report.endTime)}</div>
                        </div>
                        <span className={styles.info}>{report.errorMessage ? 'failed' : 'successful'}</span>
                        <button
                            className={styles.button}
                            onClick={() => downloadReport(report)}
                        >
                            <img src={saveIcon} alt="Download Report"/>
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Reports;
