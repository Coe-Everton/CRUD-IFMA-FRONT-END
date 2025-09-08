import { Link } from "react-router-dom";
import useHome from "../hooks/useHome";

export default function Home(){
    const { data } = useHome();

    return(
        <main className="bg-black w-[100dvw] h-[100dvh] text-white text-center place-content-center flex flex-col">
            <h1 className="font-bold text-2xl pb-[2vw]">- Todas as tabelas -</h1>
            
            {
                data.map((value) => (
                    <Link to={`/${value.Tables_in_ifma}`} key={value.Tables_in_ifma} className="py-[0.3vw] text-lg w-1/6 self-center hover:underline hover:text-purple-800 hover:cursor-pointer">
                        {value.Tables_in_ifma}
                    </Link>
                ))
            }

        </main>
    )
}