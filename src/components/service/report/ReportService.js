import axios from 'axios';
import HandleApiError from "../HandleApiError.jsx";

const BASE_URL = 'http://localhost:8080/manager/reports';


const ReportService = {

    findById: async (id) => {
        try {
            const pageNum = 0
            const pageSize = 10
            const response = await axios.get(BASE_URL+ "/" + id, { params: { pageNum, pageSize}});
            return response.data;
        } catch (error) {
            HandleApiError(error)
        }
    },

    findSuccessfulByName: async (name, pageNum, pageSize) => {
        try {
            const response = await axios.get(`${BASE_URL}/successful/name=${name}`, { params: { pageNum, pageSize } });
            return response.data;
        } catch (error) {
            HandleApiError(error);
        }
    },

    findSuccessfulBySite: async (site, pageNum, pageSize) => {
        try {
            const response = await axios.get(`${BASE_URL}/successful/site=${site}`, { params: { pageNum, pageSize } });
            return response.data;
        } catch (error) {
            HandleApiError(error);
        }
    },

    findFailedByName: async (name, pageNum, pageSize) => {
        try {
            const response = await axios.get(`${BASE_URL}/failed/name=${name}`, { params: { pageNum, pageSize } });
            return response.data;
        } catch (error) {
            HandleApiError(error);
        }
    },

    findFailedBySite: async (site, pageNum, pageSize) => {
        try {
            const response = await axios.get(`${BASE_URL}/failed/site=${site}`, { params: { pageNum, pageSize } });
            return response.data;
        } catch (error) {
            HandleApiError(error);
        }
    },
};

export default ReportService;