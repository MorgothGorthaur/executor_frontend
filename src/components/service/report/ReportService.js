import axios from 'axios';
import ScenarioService from "../scenario/ScenarioService.js";
import HandleApiError from "../HandleApiError.jsx";

const BASE_URL = 'http://localhost:8080/manager/reports';


const ReportService = {

    findById: async (id) => {
        try {
            const pageNum = 1
            const pageSize = 10
            const response = await axios.get(BASE_URL+ "/" + id, { params: { pageNum, pageSize}});
            return response.data;
        } catch (error) {
            HandleApiError(error)
        }
    }
}

export default ReportService;