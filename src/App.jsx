import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Movies from "./pages/Movies";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={DefaultLayout}>
                    <Route path="/" Component={Homepage}></Route>
                    <Route path="movies" Component={Movies}></Route>
                    <Route path="movies/:id" Component={MovieDetail}></Route>
                    <Route path="*" Component={NotFound}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
