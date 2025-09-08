import axios from "axios";
import { useEffect, useState } from "react";
import filterEntity from "../utils/filterEntity";
import type Data from "../types/InterfaceData";

export default function useDocentes() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [showPopUpExcluir, setShowPopUpExcluir] = useState(false);
    const [ID, setID] = useState<string>('');
    const [data, setData] = useState<Data[]>([]);
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        const getTables = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL+"docentes");

                if(!response) return console.log("Erro na requisição!");
                
                setData(response.data);
            } catch (error) {
                return console.log("Erro ao pegar os dados: ", error);
            }
        }

        getTables();
    },[])

    const DocenteFiltered = filterEntity(data, filter);
    
    return { showPopUp, setShowPopUp, showPopUpExcluir, setShowPopUpExcluir, setID, ID, data: DocenteFiltered, filter, setFilter }
}