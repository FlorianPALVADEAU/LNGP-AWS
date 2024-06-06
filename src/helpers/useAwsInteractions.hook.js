import AWS from 'aws-sdk';
import config from '../config/config.json';
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: config.awsLambdaUrl,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': config.awsLambdaApiKey
    }

});

const useAwsInteractions = () => {

    const getUser = async (userId) => {
        try {
            const user = await axiosClient.get(`${config.awsLambdaUrl}/${userId}`);
            return user.data;
        } catch (error) {
            console.error('Error while retrieving user data:', error);
            throw error;
        }
    }

    const getTodo = async (todo) => {
        try {
            const user = await axiosClient.get(`${config.awsLambdaUrl}/todos`);
            return user.data;
        } catch (error) {
            console.error('Error while retrieving todo:', error);
            throw error;
        }
    }

    const postTodo = async (todo) => {
        try {
            const user = await axiosClient.post(`${config.awsLambdaUrl}/todos`, todo);
            return user;
        } catch (error) {
            console.error('Error while posting todo:', error);
            throw error;
        }    
    }

    const getImageFromS3 = async (imageKey) => {
        try {
            const s3 = AWS.S3();
            const params = {
                Bucket: config.awsS3Url,
                Key: imageKey
            };
            const response = await s3.getObject(params).promise();
            return response.Body;
        } catch (error) {
            console.error('Error retrieving image from S3:', error);
            throw error;
        }
    }

    return { 
        getUser,
        postTodo,
        getTodo,
        getImageFromS3
    }
}

export default useAwsInteractions