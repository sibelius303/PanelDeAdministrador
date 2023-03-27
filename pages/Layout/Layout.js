import Head from "next/head";
import logo from "../../public/logo.jpg"
import Image from 'next/image'




export default function Layout({ children, pagina }) {

    return (
        <>
            <Head>
                <title>Checkapp Gym - {pagina}</title>
                <meta name='description' content="Gym" />
            </Head>

            <div className="min-h-screen max-h-screen  overflow-hidden flex">
                <main className="flex-1 min-w-0 h-screen overflow-y-auto ">
                    <nav className=" h-14 bg-gray-200 flex py-4">
                        <div className="flex items-center justify-center w-1/4">
                            <Image src={logo} className="w-40 h-15 m-0"/>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <h1 className="text-xl font-bold">Panel de Administrador</h1>
                        </div>
                        <div>

                        </div>
                    </nav>
                    {children}
                </main>
            </div>
        </>
    )
}