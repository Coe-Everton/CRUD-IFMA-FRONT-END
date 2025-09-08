import axios from "axios";

export default async function addNewCurso(nameCurso:string) {
    try {
        const response = await axios.post(import.meta.env.VITE_BASE_URL+`cursos`, { nameCurso });
        if(!response) return console.error("Erro ao enviar requisição!");

        console.log("✅Curso cadastro com sucesso!");
        return response.data
      } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`❌ Erro interno ao cadastrar novo curso!`, error.response?.data?.error || error.message);
        } else {
            console.error("❌ Erro desconhecido ao cadastrar curso!", error);
        }
    }
}