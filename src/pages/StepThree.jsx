import React, { useRef, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/header";
import { AnswerItem } from "../components/AnswerItem";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";


const StepThree = () => {

const selectEmojiRef = useRef("");
const[isDisabled, setIsDisabled] = useState(true);
const navigate = useNavigate();
const handleClick=(event)=>{
  selectEmojiRef.current = event.target.value;
  const userDate = JSON.parse(localStorage.getItem("user")) || {};
  localStorage.setItem(
    "user",
    JSON.stringify({...userDate, selectEmoji: selectEmojiRef.current})
  );
  setIsDisabled(!selectEmojiRef.current)
}
  

  const emoji = [
    {id: "variant-1", value: "Веселый", img: "/img/laugh.png",},
    {id: "variant-2", value: "Романтик", img: "/img/hearts.png",},
    {id: "variant-3", value: "Хитрый", img: "/img/smirk.png",},
    {id: "variant-4", value: "Трусливый", img: "/img/fright.png",},
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Header
              HeaderType="h2"
              HeaderText="Какой ты больше по характеру?"
            />
            <ul className="emoji-variants">
              {emoji.map((elem) => (
                <AnswerItem
                  answerText={elem.value}
                  answerValue={elem.value}
                   answerChange={handleClick}
                  img={elem.img}
                  id={elem.id}
                  key={elem.id}
                />
              ))}
            </ul>
            <AppButton btnText= "Далее" btnClick={()=>navigate("/step-four")} isDisabled={isDisabled}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
