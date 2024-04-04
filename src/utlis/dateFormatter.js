export const formatDate = (dateStr) => {
    try {
        const date = new Date(dateStr);

        // Extracting date components
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' }); // Get month name
        const year = date.getFullYear();


        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}`;

        return formattedDate;
    } catch (error) {
        console.error("Error detected while formatting date:", error);

    }
};

