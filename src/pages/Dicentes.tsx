import { Suspense } from "react"
import { useNavigate } from "react-router-dom";
import useDicentes from "../hooks/useDicentes";
import ConfirmRemovePopUp from "../components/ui/ConfirmRemovePopUp";
import AddNewDicentesPopUpForm from "../components/forms/AddNewDicentesPopUpForm";
import InputFilter from "../components/ui/InputFilter";

export default function Dicentes(){
    const navigate = useNavigate();
    const { showPopUp, setShowPopUp, showPopUpExcluir, setShowPopUpExcluir, setID, ID, data, filter, setFilter } = useDicentes();

    return(
        <main className="bg-black w-[100dvw] h-[100dvh] text-white text-center place-content-center flex flex-col">
            <h1 className="font-bold text-2xl pb-[2vw]">- Todos Dicentes -</h1>
            
            <InputFilter filter={filter} setFilter={setFilter}/>
            
            {
                data.map((value) => (
                    <h1 
                        key={value.id} 
                        className="py-[0.3vw] w-1/4 self-center hover:underline cursor-pointer hover:text-red-800"
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
            New Dicente
            </h1>

            { showPopUp && (
                <Suspense fallback={<></>}>
                 <AddNewDicentesPopUpForm setShowPopUp={setShowPopUp}/>
                </Suspense>
            )  } 

            { showPopUpExcluir && (
                <Suspense fallback={<></>}>
                 <ConfirmRemovePopUp fromPage="Dicentes" id={`${ID}`} setState={setShowPopUpExcluir}/>
                </Suspense>
            )  }

        </main>
    )
}