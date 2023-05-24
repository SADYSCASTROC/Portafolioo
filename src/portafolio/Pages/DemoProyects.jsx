import { Modal } from "../components/Modal";
import { useParams } from "react-router-dom"
import { getProyectsId } from "../helpers/getProyectsId";
import { useMemo } from "react";



export const DemoProyects = () => {
    const paran = useParams();
    const pro = useMemo(() => getProyectsId(paran.name), [paran.name]);



    return (
        <Modal pro={pro.name} >
        </Modal>
    )
}

