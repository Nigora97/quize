import React,  { useEffect, useState }  from "react";
import {Header} from "../components/header"
import { AppButton } from "../components/AppButton";
import { Applable } from "../components/AppLable";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";


const StepOne = () => {

  const [userAnswer, setUserAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)

  const regexAnswer = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

  const navigate = useNavigate();



  const handleClick = ()=>{
    if(!regexAnswer.test(userAnswer)){
        setUserAnswer(true);
    }
    if(regexAnswer.test(userAnswer)){
      setUserAnswer(false);
      navigate("/step-two")

      const userData = JSON.parse(localStorage.getItem("user"));
      if(userData){
        localStorage.setItem(
          "user",
          JSON.stringify({ ...userData, answer: userAnswer})
        );
        console.log(userData);
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify({answer: userAnswer})
        );
      }
      navigate("/step-two")
    }
  }



  useEffect (() =>{
if (userAnswer){
  setIsDisabled(false)
}else{
  setIsDisabled(true)
}
  }, [userAnswer])


  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
         
                 <ProgressBar currentStep={0}/>

          <div className="question">
          <Header HeaderText="Откуда о нас узнали"
          />
          <Applable labelType={"text"} 
                    labelPlaceholder ={"Ваш ответ"}  
                    errorText ={" Введите номер в правильном формате например"}  
                    labelId ={"answer"} 
                    labelValue = {userAnswer}
                    labelChange={setUserAnswer}/>
          <AppButton btnText= "Далее" 
                    isDisabled= {isDisabled} 
                    btnType="button" 
                    btnClick={()=>handleClick()}
/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
