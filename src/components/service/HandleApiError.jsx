const HandleApiError = (error) => {
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
export default HandleApiError;