import type React from "react";
import { z } from "zod";
import addNewDocente from "../services/addNewDocente";


interface PropshandleSubmitAddNewDocente {
  e:React.FormEvent,
  state:{
    nameDocente: string, 
    CPF: string, 
    nivelDeGraduacao: string, 
    senhaDoSuap: string
  },
  setError: React.Dispatch<React.SetStateAction<string | null>>
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

const addNewDocenteSchema = z.object({
  nameDocente: z.string().min(4, "Adicione um nome ao Docente"),
  CPF: z.string().regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido"),
  nivelDeGraduacao: z.enum(["Mestrado","Doutorado"], {errorMap: () => ({ message: "Escolha um curso" })}),
  senhaDoSuap: z.string().min(6, "A senha deve conter pelo menos 6 caracteres")
});

export default async function handleSubmitAddNewDocente({e, state, setError, setShowPopUp}: PropshandleSubmitAddNewDocente) {
  e.preventDefault();

  const result = addNewDocenteSchema.safeParse(state);

  if(!result.success){
    return setError(result.error.issues[0].message);
  }

  try{
    await addNewDocente(result.data);
    setShowPopUp(false)
    return window.location.reload()
  }catch(err){
      setError("Erro ao salvar o dicente.");
      console.error(err);
  }
}