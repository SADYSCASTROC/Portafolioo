import styled from "styled-components"


export const Modal = ({pro=[]}) => {

    return (
        <>
            <Overlay>
                <ContenedorModal>
                    <EncabezadoModal>

                        <h3>Encabezado modal</h3>
                        <ButonCerrar  >X</ButonCerrar>

                    </EncabezadoModal>
                    {pro} 
                </ContenedorModal>
            </Overlay>
        </>
    )
}

const Overlay = styled.div`
width: 100%;
height: 100vh;
// position: fixed;
top:0;
lef:0;
background:rgba(0,0,0,.5);
padding:20px;
display:flex;
align-items: center;
justify-content:center;
`
const ContenedorModal = styled.div`
width: 100%;
height:60%;
background:#fff;
position: relative;
border-radius:5px;
box-shadow: rgba(100,100,111,8.2) 0px 7px 29px 8px;
padding:20px;
@media(min-width: 769px){
    width: 60%;

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
right:18px;
top:20px;

`