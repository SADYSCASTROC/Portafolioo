import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProyectsId } from "../helpers/getProyectsId";
import { useMemo } from "react";
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export const DemoProyects = () => {

    var settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    const navigate = useNavigate();
    const paran = useParams();
    const pro = useMemo(() => getProyectsId(paran.name), [paran.name]);

    const onNavigateBack = () => {
        navigate(-1);
    }


    if (!pro) {
        return <Navigate to="/portafolio" />
    }

    return (
        <Overlay>
            <ContenedorModal>
                <EncabezadoModal>

                    <h3>{pro.name}</h3>
                    <ButonCerrar onClick={onNavigateBack}><CloseIcon /></ButonCerrar>

                </EncabezadoModal>

                <Carrusel>
                    <Slider {...settings}>
                        {
                            pro.img.map(index => (
                                <Box>
                                    <Imge src={index} alt="" />
                                </Box>
                            ))
                        }
                    </Slider>
                </Carrusel>


                <Parrafo className="card-text">{pro.descri}</Parrafo>
            </ContenedorModal>
        </Overlay>
    )
}


const Overlay = styled.div`
width: 100%;
height: 100vh;
// position: fixed;
top:0;
lef:0;
background:rgba(0,0,0,.5);
padding:12px;
display:flex;
align-items: center;
justify-content:center;
`
const ContenedorModal = styled.div`
width: 100%;
height:75%;
background:#fff;
position: relative;
border-radius:5px;
box-shadow: rgba(100,100,111,8.2) 0px 7px 29px 8px;
padding:10px;
@media(min-width: 769px){
    width: 70%;
    height:90%;
}
`
const EncabezadoModal = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom:20px;
padding-bottom:20px;
border-bottom:1px solid #E8E8E8;

h3{
    font-weight:500;
    font-size: 16px;
    color: #1766DC;
}

`
const ButonCerrar = styled.div`
position:absolute;
right:12px;
top:5px;

`

const Carrusel = styled.div`
height:250px;
`

const Box = styled.div`
height:225px;
width: 100%;
@media(min-width: 769px){
    padding:10px;
    width: 80%;
    height:350px;
    padding-left: 35px;
    padding-right: 35px;
    
}

`

const Imge = styled.img`

height:250px;
width: 100%;
@media(min-width: 769px){
    width: 100%;
    height:100%;
}
`
const Parrafo = styled.p`
height:100px;
margin-top: 15px;
text-align: center;
padding-left: 5px;
padding-right: 5px;
overflow-y: scroll;
border: 3px solid rgb(221, 221, 221);
@media(min-width: 769px){
    margin-top: 150px;
}
`