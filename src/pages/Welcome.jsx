import React, { useEffect, useState } from "react";
import {Header} from "../components/header"
import { AppButton } from "../components/AppButton";
import { Applable } from "../components/AppLable";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [errorName, setErrorName] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)

  const RegexUser = /^[a-zA-Zа-яА-ЯёЁ\s]+$/
  const RegexPhone = /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/

  const navigate = useNavigate();



  const handleClick = ()=>{
    if(!RegexUser.test(userName)){
        setErrorName(true);
    }
     if(!RegexPhone.test(userPhone)){
      setErrorPhone(true);
    }
    if(RegexUser.test(userName) &&  RegexPhone.test(userPhone)){
      setErrorName(false);
      setErrorPhone(false);
      navigate("/step-one")

      const userData = JSON.parse(localStorage.getItem("user"));
      if(userData){
        localStorage.setItem(
          "user",
          JSON.stringify({ ...userData, phone: userPhone, name: userName})
        );
        console.log(userData);
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify({phone: userPhone, name: userName})
        );
      }
      navigate("/step-one")
    }
  }



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
                      isError={errorName}
                      
                      />

            <Applable  labelType={"tel"}
                      labelText= {"Ваш номер"} 
                      labelPlaceholder ={"+998 9- --- -- --"}  
                      errorText ={"Введите номер в правильном формате"}  
                      labelId ={"phone"}  
                      labelPattern={"^(?:\+998)?(?:\d{2})?(?:\d{7})$"}
                      labelValue = {userPhone} 
                      labelChange={setUserPhone}
                      isError={errorPhone}
                      />
            <AppButton 
                      btnText= "Далее" 
                      isDisabled={isDisabled} 
                      btnType="button"
                      btnClick={()=>handleClick()}
                       />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
