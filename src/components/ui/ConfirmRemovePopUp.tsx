import type React from "react";
import deleteItemAnyTable from "../../services/deleteItemAnyTable";

interface PropsConfirmRemovePopUp {
  setState:React.Dispatch<React.SetStateAction<boolean>>,
  fromPage:string,
  id:string
}

export default function ConfirmRemovePopUp(props:PropsConfirmRemovePopUp){
    return(
    <main className="bg-gray-800 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold place-self-center-safe p-[2vw] text-white">
      
      <button
        className="absolute top-1 right-2 text-white text-xl hover:text-red-500"
        onClick={() => props.setState((prev:boolean) => !prev)}
      >
        ✕
      </button>

      <h1 className="text-center font-bold text-2xl pb-[3vh]">Você quer excluir esse campo?</h1>

      <button
        className="bg-red-800 p-[0.5vw] rounded-sm hover:bg-red-900 transition-colors duration-300"
        onClick={() => deleteItemAnyTable(props.fromPage, props.id)}
      >
        Excluir
      </button>
    </main>
    )
}