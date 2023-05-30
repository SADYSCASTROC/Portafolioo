import { certificados } from "../../data"

export const Educacion = () => {
  return (
    <section className='containerSobrMI p-2 animate__animated animate__fadeInLeft'>
      <h2 className='text-center  animate__animated  animate__backInLeft'> Estudios </h2>
      <hr />

      <div className="containerCertificados">
        {
          certificados.map(item => (
            <div className=" imgCertificadoConte">
                <img src={item} className="img-fluid imgCerticate" alt="..." />  
            </div>
          ))
        }
      </div>

    </section>
  )
}
