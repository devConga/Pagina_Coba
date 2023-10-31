import '../Styles/App.css';
import '../Styles/index.css';
import {useState, useEffect} from 'react';
import DropDownMenu from './DropDownMenu';

function Botones() {

    const [puntos, setPuntos] = useState(100)

    useEffect(() =>{
      }, puntos)

  return (

    <div>
      <div className='barraLogin'>

          <div className='flexboxColumna'>
            <a href='#' className='link texto_login'></a>
          </div>

          <div className='flexboxColumna'>
            <a href='#' className='link texto_login'>como</a>
          </div>

          <div className='flexboxColumna'>
            <a href='#' className='link texto_login'>tan</a>
          </div>

          <div className='flexboxColumna'>
            <a href='#' className='link texto_login'>muchacho'</a>
          </div>

          <div className='flexboxColumna'>
            <a href='#' className='link texto_login'></a>
          </div>

          <div className='flexboxColumna'>
              <DropDownMenu />
          </div>
      </div>

      <div className='flexboxColumna' style={{alignItems: 'center'}}>
        <p className='el_titulo' style={{color: 'white', width: '50%'}}>Hola somos el grupo 2 y schujman nos va a poner un</p>
        <p className='flexboxRow' style={{width: '100%'}}>
          <button className='boton' style={{width: '10%'}} onClick={()=>setPuntos(puntos+1)}>Sumar</button>
          <button className='boton' style={{width: '10%'}} onClick={()=>setPuntos(100)}>Resetear</button>
          <button className='boton' style={{width: '10%'}} onClick={()=>setPuntos(puntos-1)}>Restar</button>
        </p>

        <p className='el_titulo' style={{color: 'white', width:'10%'}}>{puntos}/100</p>

        <p className='el_titulo' style={{color: 'white', width: '40%'}}>en la nota del cuatri</p>
      </div>

    </div>

  );
}

export default Botones;
