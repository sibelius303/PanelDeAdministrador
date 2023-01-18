import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <div>
            <div className="m-20">
                <h1 className=" text-center text-6xl text-slate-500 mb-5">{user.fullname}</h1>
                <h5 className="text-center text-xl text-slate-500">Cliente desde: {user.creado?.split("T")[0]}</h5>
                <h5 className="text-center text-xl text-slate-500">Expira: {user.expire}</h5>
                <div className="flex justify-center w-full mt-10">
                    <div className=" flex gap-10 w-4/5 border-4 p-4">
                        <div className="w-1/2">
                            <p><b>Email: </b>{user.email} </p>
                            <p><b>Telefono: </b>{user.cellphone} </p>
                            <p><b>Cumpleaños: </b>{user.birthDate}</p>
                            <p><b>Direccion: </b>{user.address}</p>

                        </div>
                        <div className="w-1/2">
                            <p><b>Id: </b>{user.id}</p>
                            <p><b>Habilitacion de la cuenta: </b>{user.isActive == true ? ("Activa") : ("Desactivada")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className=" text-center text-6xl text-slate-500 my-1">Gimnasios Asociados</h1>
            <div className="m-20">
                <div className="flex justify-center gap-10 flex-wrap">
                    {
                        user.gyms?.map((gym, id) => (
                            <div className=" border-4 p-4" key={id}>
                                <h1 className="text-3xl text-slate-500 mb-2">{gym.name}</h1>
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
    )
}
