import axios from 'axios';
import ScenarioService from "../scenario/ScenarioService.js";
import HandleApiError from "../HandleApiError.jsx";

const BASE_URL = 'http://localhost:8080/manager/reports';


const ReportService = {

    findById: async (pageNum, pageSize) => {
        try {
            const response = await axios.get(BASE_URL, { params: { pageNum, pageSize}});
            return response.data;
        } catch (error) {
            HandleApiError(error)
        }
    }
}

export default ScenarioService;