import Head from "next/head";
import logo from ""



export default function Prueba({ children, pagina }) {

    return (
        <>
            <Head>
                <title>Checkapp Gym - {pagina}</title>
                <meta name='description' content="Gym" />
            </Head>

            <div className="min-h-screen overflow-hidden flex">
                <main className="flex-1 min-w-0 h-screen overflow-y-auto ">
                    <nav className=" h-14 bg-gray-200">
                        <h1>Soy el navbar</h1>
                    </nav>
                    {children}
                </main>
            </div>
        </>
    )
}