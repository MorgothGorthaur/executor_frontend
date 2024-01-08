const ExportReportService = {
     downloadReport: async (report) => {
        const blob = new Blob([JSON.stringify(report)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'report.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}
export default ExportReportService;