import { useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import handleSubmitAddNewDocente from "../../utils/handleSubmitAddNewDocente";

interface PropsAddNewDocentesPopUp {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddNewDocentesPopUp({ setShowPopUp }: PropsAddNewDocentesPopUp){
    const [state, setState] = useState({nameDocente:"", CPF:"", nivelDeGraduacao:"", senhaDoSuap:""});
    const [error, setError] = useState<string | null>(null);

    return(
        <>
            <main className="bg-gray-800 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold place-self-center-safe p-[2vw]">
                
                <button
                  className="absolute top-1 right-2 text-white text-xl hover:text-red-500 cursor-pointer"
                  onClick={() => setShowPopUp(false)}
                >
                  ✕
                </button>                

                <h1 className="text-white text-3xl pb-[2vw]">Novo Docente</h1>
                
                <form onSubmit={(e) => handleSubmitAddNewDocente({e,state,setError,setShowPopUp})} className="grid gap-[1vw]">
                    <label htmlFor="">Nome do Docente</label>
                    <input 
                        type="text" 
                        className=" border-2 border-solid border-gray-600  rounded-sm p-1"
                        onChange={(e) => setState({...state, nameDocente: e.target.value})}
                    />  

                    <label htmlFor="">CPF</label>
                    <input 
                        type="text" 
                        placeholder="000.000.000-00"
                        maxLength={14}
                        className=" border-2 border-solid border-gray-600  rounded-sm p-1"
                        onChange={(e) => setState({...state, CPF: e.target.value})}
                    />  

                    <label htmlFor="">Nível de graduação</label>
                    <Select onValueChange={(value) => setState({...state, nivelDeGraduacao:value})}>
                        <SelectTrigger className="w-full border-gray-600 border-2 rounded-sm p-1">
                            <SelectValue placeholder="Nível de graduação..." />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-600">
                          <SelectItem value="Doutorado" className="hover:text-black text-white">Doutorado</SelectItem>
                          <SelectItem value="Mestrado" className="hover:text-black text-white">Mestrado</SelectItem>
                        </SelectContent>
                    </Select>

                    <label htmlFor="">Senha do suap</label>
                    <input 
                        type="password" 
                        minLength={6}
                        className=" border-2 border-solid border-gray-600  rounded-sm p-1"
                        onChange={(e) => setState({...state, senhaDoSuap: e.target.value})}
                    />  

                    {error && <p className="text-red-500">{error}</p>}

                    <button type="submit" className="bg-green-800 p-[0.5vw] rounded-sm">Salvar</button>
                </form>
            </main>
        </>
    )
}