
import TablaPanel from "./Components/TablaPanel";

export default function PanelAdministrador() {

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="w-4/5 h-4/5">
                <h1 className="text-center">Panel Checkadd</h1>
                <TablaPanel />
            </div>
        </div>
    )
}
