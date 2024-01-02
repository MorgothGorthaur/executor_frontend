import axios from 'axios';
import HandleApiError from "../HandleApiError.jsx";

const BASE_URL = 'http://localhost:8080/manager/scenarios';


const ScenarioService = {
    findAll: async (pageNum, pageSize) => {
        try {
            const response = await axios.get(BASE_URL, { params: { pageNum, pageSize}});
            return response.data;
        } catch (error) {
            HandleApiError(error);
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
    },

    addScenario: async (scenario) => {
        try {
            await axios.post(BASE_URL, scenario);
        } catch (error) {
            HandleApiError(error);
        }
    },

    updateScenario: async (scenario) => {
        try {
            await axios.patch(BASE_URL, scenario);
        } catch (error) {
            handleApiError(error);
        }
    },

    deleteScenario: async (scenario) => {
        try {
            await axios.delete(BASE_URL, { data: scenario });
        } catch (error) {
            handleApiError(error);
        }
    },
};

export default ScenarioService;
