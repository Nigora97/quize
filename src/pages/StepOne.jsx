import React,  { useEffect, useState }  from "react";
import {Header} from "../components/header"
import { AppButton } from "../components/AppButton";
import { Applable } from "../components/AppLable";
import { ProgressBar } from "../components/ProgressBar";



const StepOne = () => {

  const [userAnswer, setUserAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)


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
          {/* <div className="indicator">
            <div className="indicator__text">
           
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
                 <ProgressBar currentStep={1}/>

          <div className="question">
          <Header HeaderText="1. Занимательный вопрос"
          />
          <Applable labelType={"text"} 
                    labelPlaceholder ={"Ваш ответ"}  
                    errorText ={" Введите номер в правильном формате например"}  
                    labelId ={"answer"} 
                    labelValue = {userAnswer}
                    labelChange={setUserAnswer}/>
          <AppButton btnText= "Далее" 
                    isDisabled= {isDisabled} 
                    btnType="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
