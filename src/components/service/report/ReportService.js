import axios from 'axios';
import HandleApiError from "../HandleApiError.jsx";

const BASE_URL = 'http://localhost:8080/manager/reports';


const ReportService = {
    findAll: async (pageNum, pageSize) => {
        try {
            const response = await axios.get(BASE_URL, { params: { pageNum, pageSize}});
            return response.data;
        } catch (error) {
            HandleApiError(error);
        }
    },

    findById: async (id) => {
        try {
            const pageNum = 0
            const pageSize = 10
            const response = await axios.get(BASE_URL+ "/id", { params: { pageNum, pageSize, id}});
            return response.data;
        } catch (error) {
            HandleApiError(error)
        }
    },

    findByName: async (name, pageNum, pageSize) => {
        try {
            const response = await axios.get(`${BASE_URL}/name`, { params: { pageNum, pageSize, name}});
            return response.data;
        } catch (error) {
            HandleApiError(error);
        }
    },

    findBySite: async (site, pageNum, pageSize) => {
        try {
            const response = await axios.get(`${BASE_URL}/site`, { params: { pageNum, pageSize, site}});
            return response.data;
        } catch (error) {
            HandleApiError(error);
        }
    }
};

export default ReportService;