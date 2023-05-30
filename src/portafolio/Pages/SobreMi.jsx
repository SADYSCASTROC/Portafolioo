import { Grid } from '@mui/material'
import React from 'react'
import { tecnologias } from '../../data'

export const SobreMi = () => {
  return (
    <div className='containerSobrMI p-4 animate__animated animate__fadeInLeft'>
      <h2 className='text-center  animate__animated  animate__backInLeft'> Sobre mi</h2>
      <hr />
      <div className='conteTextoSObreMi'>
      <p class="text-start text-center textSobreMi">
        <h5 className='text-center'> <span> Desarrolladora web front-end</span></h5>
        Mi pasión por la tecnología nació de la curiosidad de
        entender su funcionamiento. Me propuse aprender sobre
        programación y he adquirido habilidades sólidas en HTML,
        CSS, JavaScript, React, y Bootstrap. También cuento con
        conocimientos en Git para el control de versiones y el trabajo
        colaborativo. Mi capacidad para crear interfaces web
        atractivas y funcionales, junto con mi enfoque en el diseño
        responsivo, me permite adaptarme a las necesidades
        cambiantes de la industria tecnológica.</p>
        </div>
        <h2 className='text-center mt-5  animate__animated  animate__backInLeft'> Tecnologias </h2>
        <hr />
<section className='container'>

  <div className='containerImgTecnoligias'>
    {
      tecnologias.map(index =>(
        <div key={index.id} className='divImg '>
          <img src={index.img} alt="" className='imgTecnologias'/>
          <p>{index.name}</p>
        </div>
      ))
    }
  </div>

</section>

    </div>
  )
}
