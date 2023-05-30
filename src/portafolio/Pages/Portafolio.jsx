import { proyectos } from "../../data"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

export const Portafolio = () => {
  return (
    <section className='containerPortafolio  animate__animated animate__fadeInLeft'>
      <h2>Portafolio</h2>
      <hr />

      <div className="containerCardProyects">
        {
          proyectos.map(item =>(
            <div className="card cardProyecto" style={{width: '18rem', marginTop:'25px'}}>
            <div className="card-body">
              <h5 className="card-title title">{item.name}</h5>
              <p className="card-text">{item.descri}</p>
              <p className="card-text">{item.tecnologias}</p>
              <Link to={`/demoProyectos/${item.name}`} className="btn ">Demo <VisibilityIcon/> </Link> 
            </div>
          </div>
          ))
        }
      </div>

    </section>
  )
}
