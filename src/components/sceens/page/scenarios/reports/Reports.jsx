import React, { useState, useEffect } from 'react';
import ReportService from "../../../../service/report/ReportService.js";


const Reports = ({ id }) => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReportsById = async () => {
            try {
                const response = await ReportService.findById(id, 10);
                setReports(response);
            } catch (error) {
               console.log("error loading reports" + error);
            }
        };

        fetchReportsById();
    }, [id]);

    return (
        <div>
            <h1>Reports</h1>
            <ul>
                {reports.map((report) => (
                    <li key={report.id}>{report.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Reports;
