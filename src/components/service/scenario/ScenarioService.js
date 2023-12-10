import axios from 'axios';

const BASE_URL = 'http://localhost:8080/manager/scenarios';

const handleApiError = (error) => {
    if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        throw new Error(error.response.data.message);
    } else if (error.request) {
        console.error('Error making the request:', error.request);
        throw new Error('Error making the request.');
    } else {
        console.error('Error:', error.message);
        throw new Error('An error occurred.');
    }
};

const ScenarioService = {
    findAll: async (pageNum, pageSize) => {
        try {
            const response = await axios.get(BASE_URL, { params: { pageNum, pageSize}});
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    findByName: async (name, pageNum, pageSize) => {
        try {
            const response = await axios.get(`${BASE_URL}/name=${name}`, { params: { pageNum, pageSize}});
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    findBySite: async (site, pageNum, pageSize) => {
        try {
            const response = await axios.get(`${BASE_URL}/site=${site}`, { params: { pageNum, pageSize}});
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
};

export default ScenarioService;
