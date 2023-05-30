import imgIni from '../../assets/code.png'

export const Inicio = () => {
  return (
    <div className='containe d-flex flex-column justify-content-center align-items-center'>
      <img src={imgIni} alt="" className='imgInicio  animate__animated animate__backInDown' />
      <div className='conteTExtInicio'> 
      <p className='nombre'>Sadys Castro</p>     
        <span className='textInicio'>Front - End Developer! </span>
      </div>
    </div>
  )
}
