import React from "react";

export const AnswerItem = ({ answerText,  answerValue,  answerChange, img,  id,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant-1"
        id={id}
        img={img}
        value={answerValue}
        onChange={answerChange}
      />
      <label htmlFor={id}>
      {img && <img src={img} alt={answerText} />} {/* Проверяем, есть ли изображение */}
         {answerText}</label>
    </li>
  );
};
