import { Routes, Route, Navigate } from "react-router-dom"
import { SobreMi, Inicio, Portafolio, Educacion, Contacto } from "../portafolio"
import { Navbar } from "../ui"
import { ButonMenu } from "../ui/ButonMenu"

export const AppRouter = () => {

    return (
            <Navbar>
            <Routes>
                <Route path="inicio" element={<Inicio />} />
                <Route path="sobreMi" element={<SobreMi />} />
                <Route path="portafolio" element={<Portafolio />} />
                <Route path="educacion" element={<Educacion />} />
                <Route path="/" element={<Navigate to='/inicio' />} />
            </Routes>
            </Navbar>
    )
}
