import axios from "axios";

export const getCards = async () => {
    try {
        const response = await axios.get("../assets/card.json");
        return response.data;
    } catch (error) {
        console.error("Error al cargar el archivo JSON", error);
        throw error;
    }
}

export const getTimeline = async () => {
    try {
        const response = await axios.get("../assets/timeline.json");
        return response.data;
    } catch (error) {
        console.error("Error al cargar el archivo JSON", error);
        throw error;
    }
}

export const getAboutStudent = async () => {
    try {
        const response = await axios.get("../assets/aboutStudent.json");
        return response.data;
    } catch (error) {
        console.error("Error al cargar el archivo JSON", error);
        throw error;
    }
}

export const getSidebar = async () => {
    try {
        const response = await axios.get("../assets/sidebar.json");
        return response.data;
    } catch (error) {
        console.error("Error al cargar el archivo JSON", error);
        throw error;
    }
} 