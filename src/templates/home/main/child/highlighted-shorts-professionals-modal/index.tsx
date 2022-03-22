import * as React from "react";
import * as Router from "react-router-dom";
import { HighlightedShortsProfCS } from "./styles";
import {} from "react-scroll";

interface IHighlightedShortsProfessionals {
  display: string;
}

const myList = [1,2,3,4,5,6,7,8,9,10];

export const HighlightedShortsProfessionals = ({display}:IHighlightedShortsProfessionals) => {
  return (
    <HighlightedShortsProfCS>
      <div className="highlightedShorts" style={{display:display}}>
        <button className='previusBtn'></button>
        {
          myList.map( i => {
            return (
              <div className="short--container">
                <div className="short">
                  <img className="videoCover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
                  <Router.Link to="/nome-do-post" className="mask" >
                   
                  </Router.Link>      
                  <div className="picNameProfession-container">
                    <div className="nameProfession--container">
                      {/*<div  className="textContent name">Hoje tem live a noite no youtube. link aqui. aparece lá.</div>*/}
                    </div>
                  </div>
                </div>
                <div className="storiePic--container">
                  <a className="storiePic container" href="">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaT2Oiya_y5o9fXqGoHEA1QPY13P22dTiEQ&usqp=CAU"/>
                  </a>
                </div>
                <div title={"Daniel Sharezaed - Design de Interioes"} className="shortContentText">
                  <a href='' className='publicNameOcupation'>Daniel Sharezad</a>
                </div>
              </div>
            )
          })
        }
        <button className='nextBtn'></button>
      </div>
    </HighlightedShortsProfCS>
  )
}