import '../Styles/DropDown.css';
import '../Styles/index.css'
import React, {useState, useEffect, useRef} from 'react';
import foto from '../Images/chuman.jpg'

function DropDownMenu() {
    

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    
      <div className='menu-container' ref={menuRef} style={{textAlign: 'center'}}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={foto}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <div className='texto_login'><h3 style={{fontSize: '100%'}}>Alejandro Schujman<br/><span  style={{fontSize: '60%'}}>Licenciado Asador</span></h3></div>
          <ul>
            <DropdownItem text = {"Hamburguesas"}/>
            <DropdownItem text = {"Empanadas"}/>
            <DropdownItem text = {"Vacio"}/>
            <DropdownItem text = {"Lechon"}/>
            <DropdownItem text = {"Salchicha"}/>
            <DropdownItem text = {"Tombstein"}/>
          </ul>
        </div>
      </div>
    
  );
}

function DropdownItem(props){
   return(
     <li className = 'dropdownItem'>
       {/* <img src={props.img}></img> */}
       <a className='texto_login' style={{fontSize: '20px'}}> {props.text} </a>
     </li>
   );
}

export default DropDownMenu;
