import { useMemo } from "react";

interface Data {
  id:string,
  nome?:string,
  nome_do_curso?:string
}

export default function filterEntity(data: Data[], filter:string){
    const dataFiltered = useMemo(() => {
        if(!filter) return data;

        return data.filter((e) => {
          const search = filter.toLowerCase();
          const nome = e.nome?.toLowerCase() ?? '';
          const curso = e.nome_do_curso?.toLowerCase() ?? '';

          return nome.includes(search) || curso.includes(search);
        });

      }, [data, filter])
    
    return dataFiltered
}