import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function id() {
    const [user, setUser] = useState({})
    const router = useRouter()

    const Gym1 = {
        active: true,
        creado: "2022-12-01T21:18:34.406Z",
        id: 9,
        name: "Los rompe diskotecas",
        rif: "J-25217739",
        userId: 1
    }

    const Gym2 = {
        active: true,
        creado: "2022-12-01T21:18:34.406Z",
        id: 23,
        name: "Pepe lando",
        rif: "J-954661021",
        userId: 1
    }

    const DataPrueba = {
        address: "pepeland",
        birthDate: "1995-09-26",
        cellphone: "4145231923",
        creado: "2022-12-01T16:19:05.863Z",
        email: "roger.perezcol@gmail.com",
        expire: "2022-12-19",
        fullname: "Pepe lando ",
        gyms: [Gym1, Gym2],
        id: 1,
        isActive: false,
        isAdmin: false,
        password: "$2b$10$Q5I1IlWwZ9U2h1vgzCCnIOdy8aG38VssUozpQWGYt1sfSFAbxc5e6"
    }

    useEffect(() => {
        setUser(DataPrueba)
    }, [])

    console.log(user)




    return (
        <div>
            <div className="m-20">
                <h1 className=" text-center text-6xl text-slate-500 mb-5">{user.fullname}</h1>
                <h5 className="text-center text-xl text-slate-500">Creado: {user.creado}</h5>
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
            <div className="m-20 flex justify-center">
                <div className="flex gap-10">
                    {
                        user.gyms?.map((gym, id) => (
                            <div className=" border-4 p-4" key={id}>
                                <h1 className="text-3xl text-slate-500 mb-2">{gym.name}</h1>
                                <p><b>id: </b>{gym.id}</p>
                                <p><b>rif: </b>{gym.rif}</p>
                                <p><b> Id de Usuario: </b>{gym.userId}</p>
                                <p><b>Fecha de Creacion: </b>{gym.creado}</p>
                                <p><b>Habilitacion: </b>{gym.active == true ? ("Activa") : ("Desactivada")}</p>
                            </div>


                        ))
                    }
                </div>
            </div>
        </div>
    )
}
