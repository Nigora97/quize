import React from "react";
import {Header} from "../components/header"
import { AppButton } from "../components/AppButton";
import { Applable } from "../components/AppLable";


const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
        <Header HeaderText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <Applable labelType={"text"} labelText= {"Ваше имя"} labelPlaceholder ={"Ваш ответ"}  errorText ={" Введите номер в правильном формате например"}   labelId ={"username"} />
            <Applable  labelType={"tel"} labelText= {"Ваш номер"} labelPlaceholder ={"+998 9- --- -- --"}  errorText ={"Введите номер в правильном формате"}   labelId ={"phone"}  labelPattern={"^(?:\+998)?(?:\d{2})?(?:\d{7})$"} />
            <AppButton btnText= "Далее" isDisabled={true} btnType="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
