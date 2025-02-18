import React, { useEffect, useState } from "react";
import {Header} from "../components/header"
import { AppButton } from "../components/AppButton";
import { Applable } from "../components/AppLable";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)


  useEffect (() =>{
if (userName && userPhone){
  setIsDisabled(false)
}else{
  setIsDisabled(true)
}
  }, [userName, userPhone])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
            <Header 
                       HeaderType = "h1"
                       HeaderText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <Applable labelType={"text"} 
                      labelText= {"Ваше имя"} l
                      abelPlaceholder ={"Ваш ответ"} 
                      errorText ={" Введите номер в правильном формате например"}  
                      labelId ={"username"} 
                      labelValue = {userName}
                      labelChange={setUserName}
                      />

            <Applable  labelType={"tel"}
                      labelText= {"Ваш номер"} 
                      labelPlaceholder ={"+998 9- --- -- --"}  
                      errorText ={"Введите номер в правильном формате"}  
                      labelId ={"phone"}  
                      labelPattern={"^(?:\+998)?(?:\d{2})?(?:\d{7})$"}
                      labelValue = {userPhone} 
                      labelChange={setUserPhone}
                      />
            <AppButton 
                      btnText= "Далее" 
                      isDisabled={isDisabled} 
                      btnType="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
