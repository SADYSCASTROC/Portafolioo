// import MenuIcon from '@mui/icons-material/Menu';
// import { Navbar } from './Navbar';
import styled from "styled-components"





export const ButonMenu = (props) => {

    return (
        <Burguer>
            <div onClick={props.toggle} className={`menu-burguer ${props.isOpen ? 'open' : ''}`}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
        </Burguer>

    )
}


const Burguer = styled.div`
margin-top: 14px;
margin-left: 14px;
.menu-burguer {
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

.menu-line {
    height: 4px;
    background-color: #fff;
    border-radius: 3px;
    transition: all 250ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.menu-line:first-child {
    animation: firstLinetoClose 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
}

.open .menu-line:first-child {
    animation: firstLinetoOpen 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
    animation-fill-mode: forwards;
}

@keyframes firstLinetoOpen {
    0%   {
    transform: translateY(0);
    }

    50% { 
    transform: translateY(12px);
    }

    100% {
    transform: translateY(17px) rotate(45deg);
    }
  }
  
  @keyframes firstLinetoClose {
    0%   {
      transform: translateY(17px) rotate(0);
    }
  
    100% {
      transform: translateY(0);
    }
  }
  
  .open .menu-line:nth-child(2){
    opacity: 0;
  }
  
  .menu-line:last-child {
    animation: lastLinetoClose 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);  
  }
  
  .open .menu-line:last-child {
    animation: lastLinetoOpen 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
    animation-fill-mode: forwards;
  }
  
  @keyframes lastLinetoOpen {
    0%   {
      transform: translateY(0);
    }
  
    50% {
      transform: translateY(-12px);
    }
  
    100% {
      transform: translateY(-17px) rotate(-45deg);
    }
  }
  
  @keyframes lastLinetoClose {
    0%   {
      transform: translateY(-17px);
    }
  
    100% {
      transform: translateY(0);
    }
  }
`