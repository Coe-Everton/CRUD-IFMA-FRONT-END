import { Suspense } from "react"
import { useNavigate } from "react-router-dom";
import useCursos from "../hooks/useCursos";
import ConfirmRemovePopUp from "../components/ui/ConfirmRemovePopUp";
import InputFilter from "../components/ui/InputFilter";
import AddNewCursoPopUp from "../components/forms/AddNewCursoPopUpForm";


export default function Cursos(){
    const navigate = useNavigate();
    const { showPopUp, setShowPopUp, showPopUpExcluir, setShowPopUpExcluir, setID, ID, data, filter, setFilter } = useCursos();

    return(
        <main className="bg-black w-[100dvw] h-[100dvh] text-white text-center place-content-center flex flex-col">
            <h1 className="font-bold text-2xl pb-[2vw]">- Todos cursos -</h1>
            
            <InputFilter filter={filter} setFilter={setFilter}/>

            {
                data.map((value) => (
                    <h1 
                        key={value.id} 
                        className="py-[0.3vw] w-1/4 self-center hover:underline cursor-pointer hover:text-red-800"
                        onClick={() => {setShowPopUpExcluir(prev => !prev); setID(value.id)}}
                    >
                        {value.nome_do_curso}
                    </h1>
                ))
            }

            <h1 
            className="absolute top-0 left-0 m-4 text-xl font-bold hover:underline hover:text-purple-800 cursor-pointer"
            onClick={() => navigate("/")}
            >Voltar</h1>
            
            <h1 
            className="absolute top-0 right-0 m-4 text-xl font-bold hover:underline hover:text-purple-800 cursor-pointer"
            onClick={() => setShowPopUp(prev => !prev)}
            >
            New Curso
            </h1>

            { showPopUp && (
                <Suspense fallback={<></>}>
                 <AddNewCursoPopUp setShowPopUp={setShowPopUp}/>
                </Suspense>
            )  }
            
            { showPopUpExcluir && (
                <Suspense fallback={<></>}>
                 <ConfirmRemovePopUp fromPage="Cursos" id={`${ID}`} setState={setShowPopUpExcluir}/>
                </Suspense>
            )  }

        </main>
    )
}