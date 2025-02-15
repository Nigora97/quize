import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export const AppButton = ({btnText, isDisabled, btnType, btnId}) => {

return (
    <button disabled={isDisabled} type= {btnType} id={btnId}>
              {btnText}
            </button>
)
}