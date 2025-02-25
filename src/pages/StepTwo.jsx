import React, {useState, useRef } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/header";
import { AnswerItem } from "../components/AnswerItem";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";


const StepTwo = () =>{
  const selectCourseRef = useRef("")
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const handleClick = (event) => {
    selectCourseRef.current =event.target.value;
    const userData = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem(
      "user",
      JSON.stringify({ ...userData, selectCourse:selectCourseRef.current})
    );
    setIsDisabled(!selectCourseRef.current);
  }
  
  const course = [
    {id: "variant-1", value: "React", },
    {id: "variant-2", value: "Python",},
    {id: "variant-3", value: "DATA Analytics",},
    {id: "variant-4", value: "UX/UI",}
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
       <ProgressBar currentStep={1}/>
          <div className="question">
            <Header HeaderText ="Выберите курс" HeaderType = "h2"/>
                  <ul className="variants">
                    {course.map((elem) => (
                      <AnswerItem 
                      answerText={elem.value} 
                      answerValue={elem.value}
                      id = {elem.id}
                      key = {elem.id}
                      answerChange={handleClick}
                      />

                    ))}
            </ul>
            <AppButton btnText= "Далее" 
                    isDisabled= {isDisabled} 
                    btnType="button" 
                    btnClick={() => navigate ("/step-three")}

                            />
          </div>
        </div>
      </div>
    </div>
  )
}





export default StepTwo;
