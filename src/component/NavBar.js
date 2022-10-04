import React from 'react';
import {Link,useHistory} from 'react-router-dom'
import { navbarOptions} from '../resource/navbarOptionList';

function Navbar(props) {
    let history = useHistory();
    const handleBack = (e) => {
      history.goBack();
    };
    const handleForward = (e) => {
      history.goForward();
    };

    const renderNavbarOption=()=>{
              // let currentUser=true;
            //   let currentUser=false;
            //   let optionList=navbarOptions;
                return navbarOptions.map((option)=>{
                  return (
                    <Link to={option.url} key={option.id} className="nav-item nav-link text-white .margin-right-xs { margin-right: .25em; }">
                           {option.name}
                    </Link> 
                  )
                })
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
        <div style={{ float: "left" ,marginLeft: '2vw' }}>
          <span className="navbar-brand" >
            <i
              onClick={(e) => handleBack(e)}
              className="bi bi-chevron-left text-white"
            ></i>
          </span>
          <span className="navbar-brand">
            <i
              onClick={(e) => handleForward(e)}
              className="bi bi-chevron-right text-white"
            ></i>
          </span>
        </div>
  
  
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto ">
               {
                renderNavbarOption()
               }
          </div>
        </div>
      </nav>
    );
}

export default Navbar;