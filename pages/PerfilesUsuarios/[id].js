import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";

export default function id() {
    const router = useRouter()
    const [user, setUser] = useState(false)

    useEffect(() => {
        if (router.isReady) {
            axios.get(`https://gymapi.up.railway.app/userdetail/${router.query.id}`).then((res) => {
                setUser(res.data.user)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [router.isReady])



    return (
        <Layout>
            <div className="max-h-screen min-h-max flex pr-20">
                <div className="w-[500px] py-20 border-r-4 flex flex-col item-center bg-gray-200">
                    <div className="flex justify-center">
                        <div className="relative w-60 h-60 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-full h-full text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    <h1 className=" text-center text-6xl text-black mb-5">{user.fullname}</h1>
                    <h5 className="text-center text-xl text-black">Cliente desde: {user.creado?.split("T")[0]}</h5>
                    <h5 className="text-center text-xl text-black">Expira: {user.expire}</h5>
                </div>
                <div className="w-full flex flex-col gap-10 p-10">
                    <div>
                        <h1 className=" text-center text-4xl font-bold text-black ">Detalles del Cliente</h1>
                    </div>
                    <div className="flex justify-center w-full">
                        <div className=" flex gap-10 w-4/5 border-4 p-4">
                            <div className="w-1/2">
                                <p><b>Email: </b>{user.email} </p>
                                <p><b>Telefono: </b>{user.cellphone} </p>
                                <p><b>Cumpleaños: </b>{user.birthDate}</p>
                                <p><b>Direccion: </b>{user.address}</p>
                                <p><b>Id: </b>{user.id}</p>
                                <p><b>Habilitacion de la cuenta: </b>{user.isActive == true ? ("Activa") : ("Desactivada")}</p>

                            </div>
                            <div className="w-1/2">
                                <p><b>Nombre del Plan: </b>Basico</p>
                                <p><b>Monto del Plan: </b>30$</p>
                                <p><b>Meses Registrado: </b>3</p>
                                <p><b>Ultima Fecha de Pago: </b>10/02/2023</p>
                                <p><b>Metodo de Pago </b>Zelle</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className=" text-center text-4xl font-bold text-black ">Gimnasios Asociados</h1>
                    </div>
                    <div className=" px-20">
                        <div className="flex gap-10 flex-wrap">
                            {
                                user.gyms?.map((gym, id) => (
                                    <div className=" border-4 p-4" key={id}>
                                        <h1 className="text-3xl text-black mb-2">{gym.name}</h1>
                                        <p><b>id: </b>{gym.id}</p>
                                        <p><b>rif: </b>{gym.rif}</p>
                                        <p><b> Id de Usuario: </b>{gym.userId}</p>
                                        <p><b>Fecha de Creacion: </b>{(gym.creado).split("T")[0]}</p>
                                        <p><b>Habilitacion: </b>{gym.active == true ? ("Activa") : ("Desactivada")}</p>
                                        <p><b>Facturacion Anual: </b>USD/Ref {gym.totalRefAnual}</p>
                                        <p><b>Clientes activos : </b>{gym.customers.active}</p>
                                        <p><b>Clientes Inactivos : </b>{gym.customers.inactive}</p>


                                    </div>


                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}
