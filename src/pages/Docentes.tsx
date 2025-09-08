import { Suspense } from "react"
import { useNavigate } from "react-router-dom";
import useDocentes from "../hooks/useDocentes";
import ConfirmRemovePopUp from "../components/ui/ConfirmRemovePopUp";
import AddNewDocentesPopUpForm from "../components/forms/AddNewDocentesPopUpForm";
import InputFilter from "../components/ui/InputFilter";

export default function Docentes(){
    const navigate = useNavigate();
    const { showPopUp, setShowPopUp, showPopUpExcluir, setShowPopUpExcluir, setID, ID, data, filter, setFilter } = useDocentes();

    return(
        <main className="bg-black w-[100dvw] h-[100dvh] text-white text-center place-content-center flex flex-col">
            
            <h1 className="font-bold text-2xl pb-[2vw]">- Todos Docentes -</h1>
            
            <InputFilter filter={filter} setFilter={setFilter}/>

            {
                data.map((value) => (
                    <h1 
                        key={value.id} 
                        className="py-[0.3vw] hover:underline w-1/4 self-center cursor-pointer hover:text-red-800"
                        onClick={() => {setShowPopUpExcluir(prev => !prev); setID(value.id)}}
                    >
                        {value.nome}
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
            New Docente
            </h1>

            { showPopUp && (
                <Suspense fallback={<></>}>
                 <AddNewDocentesPopUpForm setShowPopUp={setShowPopUp}/>
                </Suspense>
            )  } 

            { showPopUpExcluir && (
                <Suspense fallback={<></>}>
                 <ConfirmRemovePopUp fromPage="Docentes" id={`${ID}`} setState={setShowPopUpExcluir}/>
                </Suspense>
            )  }

        </main>
    )
}