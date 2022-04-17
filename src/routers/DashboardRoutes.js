import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/NavBar";

import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/searchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />

                <Route path="search" element={<SearchScreen />} />

                <Route path="/" element={<MarvelScreen />} />
            </Routes>
        </>
    );
};
