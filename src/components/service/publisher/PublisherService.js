import axios from 'axios';

const BASE_URL = 'http://localhost:8080/publisher/scenario';

const PublisherService = {

    publish: async(scenario) => {
        try{
            await axios.post(BASE_URL, scenario)
        } catch (error) {
            alert(error)
        }
    }
}

export default PublisherService;

