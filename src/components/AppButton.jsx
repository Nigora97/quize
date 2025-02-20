import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export const AppButton = ({btnText, isDisabled, btnType, btnId, btnClick }) => {

return (
    <button disabled={isDisabled} type= {btnType} id={btnId} onClick={btnClick}>
              {btnText}
            </button>
)
}