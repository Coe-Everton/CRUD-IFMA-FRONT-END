import axios from "axios";

export default async function addNewDocente(body:object){
    try {
        const response = await axios.post(import.meta.env.VITE_BASE_URL+"docentes", body);
        if(!response) return console.error("Erro ao enviar requisição!");

        return console.log("Docente cadastro com sucesso!");
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`❌ Erro interno ao cadastrar novo docente!`, error.response?.data?.error || error.message);
            alert(error.response?.data?.error || error.message)
        } else {
            console.error("❌ Erro desconhecido ao cadastrar docente!", error);
        }
    }
}