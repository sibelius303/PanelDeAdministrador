import { useState } from "react";
import DataTable from "react-data-table-component";

export default function TablaPanel() {

    const [ active, setActive ] = useState(false)

    const data = [
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
        },
        {
            nombre: "Cesar Vallenilla",
            correo: "cesarev17@gmail.com",
            dateAfiliacion: "12/01/2023",
            gymAfiliados:"5",
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
            selector: row => (<>
                <div>
                    <select value={active} onChange={(e)=>{setActive(e.target.value), console.log(e.target.value)}}>
                        <option value="activo">Activo</option>
                        <option value="deshabilitado">Deshabilitado</option>
                    </select>
                </div>
            </>)
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
