import React from "react";

export const AnswerItem = ({answerText, id, answerValue, answerChange}) => {
    return(
        <li className="variant-wrapper">
                <input 
                required 
                type="radio" 
                name="variant-1" 
                id={id}
                value={answerValue}
                onChange={answerChange}
                />
                <label htmlFor={id}>
                    {answerText}
                </label>
              </li>
    )
}