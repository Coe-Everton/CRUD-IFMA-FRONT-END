import axios from "axios";

export default async function addNewDicente(body:object){
    try {
        const response = await axios.post(import.meta.env.VITE_BASE_URL+"dicentes", body);
        if(!response) return console.error("Erro ao enviar requisição!");

        return console.log("Dicente cadastro com sucesso!");
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`❌ Erro interno ao cadastrar novo dicente!`, error.response?.data?.error || error.message);
            alert(error.response?.data?.error || error.message)
        } else {
            console.error("❌ Erro desconhecido ao cadastrar dicente!", error);
        }
    }
}