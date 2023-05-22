import imgIni from '../../assets/code.png'

export const Inicio = () => {
  return (
    <div className='containe d-flex flex-column justify-content-center align-items-center'>
      <img src={imgIni} alt="" className='imgInicio' />
      <div className='conteTExtInicio'>      
        <span className='textInicio'>Hola Mundo !!! </span>
      </div>
    </div>
  )
}
