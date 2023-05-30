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
                                    <Imge src={index} className="img-fluid imgDemoProyec" alt="..." />
                                </Box>

                            ))
                        }
                    </Slider>
                    <br />
                    <hr />

                    <Parrafo href={pro.link} Target="_blank" className="card-text">Ver</Parrafo>
                </Carrusel>
                <Nota>{pro.noat}</Nota>
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
height:80%;
background:#fff;
position: relative;
border-radius:5px;
box-shadow: rgba(100,100,111,8.2) 0px 7px 29px 8px;
padding:10px;
@media(min-width: 769px){
    width: 75%;
    height:80%;
}
@media(min-width: 999px){
    width: 60%;
    height:550px;
}
`
const EncabezadoModal = styled.div`
display: flex;
margin-left: 15px;
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
height:86%;


@media(min-width: 769px){
    height:400px;
}
`

const Box = styled.div`
height:80%px;
width: 100%;
padding-left: 10px;

@media(min-width: 769px){
    padding:10px;
    width: 80%;
    height:315px;
    padding-left: 15px;
    padding-right: 15px;

}



`

const Imge = styled.img`

height:355px;
width: 95%;
@media(min-width: 769px){
    width: 90%;
    height:300px;
    padding-left:30px;
}
@media(min-width: 999px){
    width: 80%;
    height:390px;
    padding-left:150px;
}
`
const Parrafo = styled.a`
color:black;
margin-left: 50%;
margin-top: 55px;

@media(min-width: 769px){
    margin-left: 50%;
    margin-top: -10px;
}

`
const Nota = styled.p`
color:black;
background:#fff;

`