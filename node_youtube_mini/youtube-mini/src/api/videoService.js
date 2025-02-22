import apiClient from "./apiClient";

// lấy danh sách video type
export const getVideoTypes = async () => {
    try {
        const response = await apiClient.get("/sidebar");
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getVideos = async () => {
    try {
        const response = await apiClient.get("/videos/list-video");
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getVideoType = async () => {
    try {
        const response = await apiClient.get("/videos/get-video-types");
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}