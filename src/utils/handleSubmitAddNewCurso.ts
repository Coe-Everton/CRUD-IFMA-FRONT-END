import { z } from "zod";
import addNewCurso from "../services/addNewCurso";
import type React from "react";

interface PropshandleSubmitAddNewCurso {
  e: React.FormEvent,
  nameCurso: string,
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  setError:React.Dispatch<React.SetStateAction<string | null>>,
}

const newCursoSchema = z.object({
  nameCurso: z
    .string()
    .min(1, "O nome do curso é obrigatório!!!")
})

export default async function handleSubmitAddNewCurso({e,nameCurso,setShowPopUp,setError}: PropshandleSubmitAddNewCurso) {
    
    e.preventDefault();
    setError(null);

    const result = newCursoSchema.safeParse({ nameCurso });
    if (!result.success) {
      return setError(result.error.issues[0].message);
    }

    try {
      await addNewCurso(nameCurso);
      setShowPopUp(false);
      return window.location.reload();
    } catch (err) {
      setError("Erro ao salvar o curso.");
      console.error(err);
    }
  }