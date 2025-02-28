import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/header";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";



const StepFour = () => {
const [points, setPoints] =useState("");
const navigate = useNavigate();
  const variant = [
    {id: "variant-1", points: 1,},
    {id: "variant-2", points: 2,},
    {id: "variant-3", points: 3,},
    {id: "variant-4", points: 4,},
    {id: "variant-5", points: 5,},

  ]
  useEffect(()=> {
    const userDate = JSON.parse(localStorage.getItem("user")) || {};
  localStorage.setItem( "user",  JSON.stringify({...userDate, points}));
  }, [points])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <ProgressBar currentStep={4} />
        <div className="question">
        <Header
              HeaderType="h2"
              HeaderText="Оцените наш учебный центр"
            />
            <ul className="level-variants">
             {variant.map((elem)=> (
              <li className="variant-wrapper" key={elem.id}>
                <input 
                value={elem.points}
                type="radio" 
                required 
                name="variant" 
                id={elem.id} 
                onChange={(e) => {
                  setPoints(e.target.value);
                }}/>
                <label htmlFor={elem.id}>{elem.points}</label>
              </li>
             ))}
            </ul>
            <AppButton 
            isDisabled = {points ? false : true}
             btnText= "Далее" 
             btnClick={()=>navigate("/Thanks")}            
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
