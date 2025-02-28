import React from "react";
import { Header } from "../components/header";


const Thanks = () => {
  const {name, phone, points, selectCourse, answer, selectEmoji } = JSON.parse(localStorage.getItem("user"));
  const value = [
    {text: "Имя", userResponce: name},
    {text: "Номер Телефона", userResponce: phone},
    {text: "Откуда узнали", userResponce: answer},
    {text: "Выбранный курс", userResponce: selectCourse},
    {text: "Ваш характер", userResponce: selectEmoji},
    {text: "Оценка школы", userResponce: points},

  ]
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header
              HeaderType="h1"
              HeaderText="Спасибо за прохождение опроса!"
            />
        {value.map((elem)=>(
          <div className="info">
            <span>{elem.text}</span>
            <span>{elem.userResponce}</span>
          </div>
          
        ))}
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
