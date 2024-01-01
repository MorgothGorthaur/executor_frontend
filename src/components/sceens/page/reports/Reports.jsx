import React, {useState} from "react";
import ReportService from "../../../service/report/ReportService.js";
import Menu from "./menu/Menu.jsx";
import styles from "./Reports.module.css";
import viewIcon from "../../../../assets/view.svg";

const Reports = () => {
    const [reports, setReports] = useState([])
    const [selectedReport, setSelectedReport] = useState(null);

    async function findAll(currentPage, pageSize) {
        return await ReportService.findAll(currentPage - 1, pageSize)
    }

    async function findBySite(searchText, currentPage, pageSize) {
        return await ReportService.findBySite(searchText, currentPage - 1, pageSize)
    }

    async function findByName(searchText, currentPage, pageSize) {
        return await ReportService.findByName(searchText, currentPage - 1, pageSize)
    }

    const formatDateTime = (date) => {
        const f = date.toString().split(',')
        return `${f[0]}/${f[1]}/${f[2]} ${f[3]}:${f[4]}:${f[5]}`;
    };

    return (
        <div className={styles.reports_container}>
            <div>
                <Menu setReports={setReports}
                      findAll={findAll}
                      findBySite={findBySite}
                      findByName={findByName}
                />
            </div>
            <div className={styles.reports_list}>
                {reports.map((report, index) => (
                    <div
                        key={index}
                        className={styles.report_box}
                    >
                        <div className={styles.report_name}>{report.name}</div>
                        <div>{report.site}</div>
                        <div className={styles.time_range}>
                            {formatDateTime(report.startTime)} - {formatDateTime(report.endTime)}
                        </div>

                        <div>
                        <button className={styles.button} onClick={() => {
                            setSelectedReport(report)
                        }}>
                            <img src={viewIcon} alt="View"/>
                        </button>

                    </div>
                    </div>
                ))}
            </div>
            {/*{selectedReport && (*/}
            {/*    <FullScenario scenario={selectedScenario} setScenario={setSelectedScenario}*/}
            {/*                  deleteScenario={handleDeleteScenario} updateList={updateList}/>*/}
            {/*)}*/}
        </div>
    )
}
export default Reports