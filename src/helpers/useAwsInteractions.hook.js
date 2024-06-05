import AWS from 'aws-sdk';
import config from '../../config/config.json';

const useAwsInteractions = () => {

    const getUser = async (userId) => {
        // AWS SDK code to get user
    }

    const logUserIn = async (email, password) => {
        // AWS SDK code to log user in
    }

    const logUserOut = async () => {
        // AWS SDK code to log user out
    }

    const addNewTodo = async (todo) => {
        // AWS SDK code to add new todo
    }

    const updateTodo = async (todo) => {
        // AWS SDK code to update todo
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
        logUserIn,
        logUserOut,
        addNewTodo,
        updateTodo,
        getImageFromS3
    }
}

export default useAwsInteractions