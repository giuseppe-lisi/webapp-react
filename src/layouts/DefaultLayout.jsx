import { Outlet } from "react-router-dom";
import Header from "../pages/Header";

function DefaultLayout() {
    <>
        <Header />
        <main>
            <Outlet />
        </main>
    </>;
}

export default DefaultLayout;
