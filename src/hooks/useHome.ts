import axios from "axios";
import { useEffect, useState } from "react";

interface Data{
    Tables_in_ifma:string
}

export default function useHome() {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const getTables = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL);

                if(!response) return console.log("Erro na requisição!");
                
                setData(response.data);
            } catch (error) {
                return console.log("Erro ao pegar os dados: ", error);
            }
        }

        getTables();
    },[])

    return { data }
}