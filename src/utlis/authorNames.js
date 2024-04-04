import { getAuthorName } from "../services/homeApi"

export const formatAuthorName = async (uid) => {
    try {
        const author = await getAuthorName(uid);

        return author.data.user.name;
    } catch (error) {
        console.error("Error while formatting author names:", error);
        return null;
    }
};

