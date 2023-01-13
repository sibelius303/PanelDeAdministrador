import { useState } from "react";
import DataTable from "react-data-table-component";

export default function TablaPanel() {

    const data = [
        {
            id: 1,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 2,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 3,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 4,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 5,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 6,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 7,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 8,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 9,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 10,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 11,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 12,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },
        {
            id: 13,
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados: "5",
            active: true,
        },

    ]

    const columnas = [
        {
            name: 'Nombre',
            selector: row => row.nombre,
        },
        {
            name: 'Correo',
            selector: row => row.correo,
        },
        {
            name: 'Fecha de Afiliacion',
            selector: row => row.dateAfiliacion,
        },
        {
            name: 'Gimnasios Afiliados',
            selector: row => row.gymAfiliados,
        },
        {
            name: 'Habilitar o Deshabilitar',
            cell: row => {
                if (row.active == true) {
                    return(
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                        off
                    </button>
                    )
                } else {
                    return(
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                        on
                    </button>)
                }
            }
        },
    ]

    return (
        <div>
            <DataTable
                columns={columnas}
                data={data}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="400px"
                expandableRows
            />
        </div>
    )
}
