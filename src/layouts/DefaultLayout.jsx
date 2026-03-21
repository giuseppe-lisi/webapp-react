import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="wrapper">
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;
