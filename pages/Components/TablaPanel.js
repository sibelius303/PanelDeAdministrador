import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useRouter } from "next/router";

export default function TablaPanel() {
    const [users, setUsers] = useState([])
    const [aux, setAux] = useState(0)
    const router = useRouter();


    const activeSwitcher = async (userId, isActive) => {
        let switcher;
        if (isActive) switcher = false
        else switcher = true

        try {
            const { data } = await axios.put("https://gymapi.up.railway.app/userupdater", { isActive: switcher, userId })
            setAux((prev) => prev + 1)
        } catch (error) {
            console.log(error)
        }
    }


    const automatic = async () => {
        console.log("entro")
        try {
            const { data } = await axios.put("https://gymapi.up.railway.app/disabler")
            setAux((prev) => prev + 1)
            alert(data.msg)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        axios.get("https://gymapi.up.railway.app/getusers").then((res) => {
            let result = res.data.users.sort((a, b) => {
                if (a.id < b.id) {
                    return -1;
                } else if (a.id > b.id) {
                    return 1;
                } else {
                    return 0;
                }

            x
            })
            setUsers(result)
            console.log(result[0])
        }).catch(err => alert("Error server")
        )


        return () => {
            setUsers([])
        }
    }, [aux])

    const handleClick = (row) => {
        router.push(`/PerfilesUsuarios/${row.id}`);


    }


    const columnas = [
        {
            name: "id",
            selector: row => row.id,
            sortable: true,
            sortFunction: (a, b) => {
                if (a.id > b.id) {
                    return -1;
                } else if (a.id < b.id) {
                    return 1;
                } else {
                    return 0;
                }
            }

        },
        {
            name: 'Nombre',
            selector: row => row.fullname,
        },
        {
            name: 'Correo',
            selector: row => row.email,
        },
        {
            name: 'Fecha de Afiliacion',
            selector: row => {
                let result = row.creado.split("T")[0]
                return result
            },
        },
        {
            name: 'Expira',
            selector: row => row.expire,
        },
        {
            name: "Estado",
            selector: row => {
                if (row.isActive == true) {
                    return "Activo"
                } else {
                    return "Inactivo"
                }
            },
            sortable: true,
            sortFunction: (a, b) => {
                if (a.isActive > b.isActive) {
                    return -1;
                } else if (a.isActive < b.isActive) {
                    return 1;
                } else {
                    return 0;
                }
            }
        },
        {
            name: 'Gimnasios Afiliados',
            selector: row => row.gyms.length,
        },
        {
            name: 'Habilitar o Deshabilitar',

            cell: row => {
                if (row.isActive == true) {
                    return (
                        <button onClick={(e) => activeSwitcher(row.id, row.isActive)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                            off
                        </button>
                    )
                } else {
                    return (
                        <button onClick={(e) => activeSwitcher(row.id, row.isActive)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                            on
                        </button>)
                }
            }
        },
    ]

    return (
        <div>

            <button onClick={(e) => automatic()} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                Desahbilitar Usuarios morosos
            </button>

            <DataTable
                columns={columnas}
                data={users}
                fixedHeader
                pagination
                fixedHeaderScrollHeight="400px"
                onRowClicked={handleClick}
                highlightOnHover
            />
        </div>
    )
}
