import axios from 'axios';

const API_BASE_URL = 'https://api.haircareblog.com'; // Replace with your actual API base URL

export const fetchHairCarePosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching hair care posts:', error);
        throw error;
    }
};

export const submitQuestionnaire = async (answers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/questionnaire`, answers);
        return response.data;
    } catch (error) {
        console.error('Error submitting questionnaire:', error);
        throw error;
    }
};

export const fetchProductSuggestions = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/suggestions/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product suggestions:', error);
        throw error;
    }
};

export const fetchPointsBalance = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}/points`);
        return response.data;
    } catch (error) {
        console.error('Error fetching points balance:', error);
        throw error;
    }
};

export const redeemPoints = async (userId, rewardId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/${userId}/redeem`, { rewardId });
        return response.data;
    } catch (error) {
        console.error('Error redeeming points:', error);
        throw error;
    }
};

export const uploadReceipt = async (userId, receiptData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/${userId}/upload-receipt`, receiptData);
        return response.data;
    } catch (error) {
        console.error('Error uploading receipt:', error);
        throw error;
    }
};