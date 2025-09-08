import axios from "axios";

export default async function deleteItemAnyTable(fromPage:string, id:string) {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}${fromPage}/${id}`);
        if(!response) return console.error("Erro ao enviar requisição!");

        window.location.reload();
        return console.log(`Column deletada com sucesso!`);
    } catch (error) {
        return console.error(`❌ Erro interno ao deletar ${fromPage}!, error: ${error}`) 
    }
}