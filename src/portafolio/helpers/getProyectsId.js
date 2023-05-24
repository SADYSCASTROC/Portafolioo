import { proyectos } from "../../data";
export const getProyectsId = (name) => {
    return proyectos.find( pro => pro.name === name );
}
