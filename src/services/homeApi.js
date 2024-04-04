import api from "./api";

export const getTop3 = async () => {
    try {
        const response = await api.get("/client/all-articles");
        return response.data;
    } catch (error) {
        throw new Error("Error while fetching data from API: " + error.message);
    }
};

export const getAuthorName = async (uid) => {
    try {
        const response = await api.get(`/users/get-name/${uid}`);
        return response.data;
    } catch (error) {
        throw new Error("Error while fetching data from API: " + error.message);
    }
}
export const getArticleApi = async (slug) => {
    try {
        const response = await api.get(`/client/get-post/${slug}`);
        return response.data;
    } catch (error) {
        throw new Error("Error while fetching data from API: " + error.message);
    }
}