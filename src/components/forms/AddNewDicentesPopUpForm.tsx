import { useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useCursos from "../../hooks/useCursos";
import handleSubmitAddNewDicente from "../../utils/handleSubmitAddNewDicente";

interface PropsAddNewDicentesPopUp {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddNewDicentesPopUp({ setShowPopUp }: PropsAddNewDicentesPopUp){
    const [state, setState] = useState({nameDicente:"", CPF:"", curso:"", senhaDoSuap:""});
    const [error, setError] = useState<string | null>(null)
    const { data } = useCursos()

    return(
        <>
            <main className="bg-gray-800 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold place-self-center-safe p-[2vw]">

                <button
                  className="absolute top-1 right-2 text-white text-xl hover:text-red-500 cursor-pointer"
                  onClick={() => setShowPopUp(false)}
                >
                  ✕
                </button>

                <h1 className="text-white text-3xl pb-[2vw]">Novo Dicente</h1>
                
                <form onSubmit={(e) => handleSubmitAddNewDicente({e,state,setError,setShowPopUp})} className="grid gap-[1vw]">
                    <label htmlFor="">Nome do Dicente</label>
                    <input 
                        type="text" 
                        className=" border-2 border-solid border-gray-600  rounded-sm p-1"
                        onChange={(e) => setState({...state, nameDicente: e.target.value})}
                    />  

                    <label htmlFor="">CPF</label>
                    <input 
                        type="text" 
                        placeholder="000.000.000-00"
                        maxLength={14}
                        className=" border-2 border-solid border-gray-600  rounded-sm p-1"
                        onChange={(e) => setState({...state, CPF: e.target.value})}
                    />  

                    <label htmlFor="">Cursos</label>
                    <Select onValueChange={(value) => setState({...state, curso:value})}>
                        <SelectTrigger className="w-full border-gray-600 border-2 rounded-sm p-1">
                            <SelectValue placeholder="Cursos..." />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-600">
                          {
                            data
                                .filter(item => !!item.nome_do_curso)
                                .map(item => (
                                    <SelectItem 
                                        key={item.id}
                                        value={item.nome_do_curso!} 
                                        className="hover:text-black text-white"
                                    >{item.nome_do_curso}</SelectItem>
                                ))
                          }
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