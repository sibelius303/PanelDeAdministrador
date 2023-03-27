
import TablaPanel from "./Components/TablaPanel";
import Layout from "./Layout/Layout";

export default function PanelAdministrador() {

    return (
        <Layout>
            <div className=" flex justify-center items-center h-full bg-slate-100">
                <div className="w-4/5 h-4/5 border p-10">
                    <h1 className=" mb-10 text-5xl font-bold tracking-tight text-gray-900 text-center">Panel Checkadd</h1>
                    <TablaPanel />
                </div>
            </div>
        </Layout>
    )
}
