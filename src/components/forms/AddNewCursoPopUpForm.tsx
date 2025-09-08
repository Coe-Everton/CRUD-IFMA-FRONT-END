import React, { useState } from "react";
import handleSubmitAddNewCurso from "../../utils/handleSubmitAddNewCurso";

interface PropsAddNewCursoPopUp {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>
}



export default function AddNewCursoPopUp({ setShowPopUp }: PropsAddNewCursoPopUp){
    const [nameCurso, setNameCurso] = useState<string>('');
    const [error, setError] = useState<string | null>(null)

    return(
        <>
            <main className="bg-gray-800 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold place-self-center-safe p-[2vw]">
                <button
                  className="absolute top-1 right-2 text-white text-xl hover:text-red-500 cursor-pointer"
                  onClick={() => setShowPopUp(false)}
                >
                  ✕
                </button>

                <h1 className="text-white text-3xl pb-[2vw]">Novo curso</h1>
                
                <form onSubmit={(e) => handleSubmitAddNewCurso({e,nameCurso, setShowPopUp, setError})} className="grid gap-[1vw]">
                    <label htmlFor="">Nome do curso</label>
                    <input 
                        type="text" 
                        className=" border-2 border-solid border-gray-600  rounded-sm p-1"
                        onChange={(e) => setNameCurso(e.target.value)}
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    
                    <button type="submit" className="bg-green-800 p-[0.5vw] rounded-sm">Salvar</button>
                </form>
            </main>
        </>
    )
}