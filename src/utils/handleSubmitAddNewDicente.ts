import type React from "react"
import { z } from "zod"
import addNewDicente from "../services/addNewDicente"

interface PropshandleSubmitAddNewDicente {
  e:React.FormEvent,
  state:{
    nameDicente:string, 
    CPF:string, 
    curso:string, 
    senhaDoSuap:string
  },
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

const newDicenteSchema = z.object({
    nameDicente: z.string().min(1, "Deve ter nome do Dicente"),
    CPF: z.string().regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido"),
    curso: z.string().min(1, "Selecione um curso"),
    senhaDoSuap: z.string().min(6, "A senha deve conter pelo menos 6 caracteres")
})

export default async function handleSubmitAddNewDicente({e,state,setError,setShowPopUp}: PropshandleSubmitAddNewDicente) {
  e.preventDefault()

  const result = newDicenteSchema.safeParse(state);
  
  if(!result.success){
    return setError(result.error.issues[0].message);
  }
  
  try {
    await addNewDicente(result.data);
    setShowPopUp(false);
    return window.location.reload();
  } catch (err) {
      setError("Erro ao salvar o dicente.");
      console.error(err);
  }

}