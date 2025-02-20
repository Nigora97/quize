import React from "react";

export const Applable = ({
    labelText,
    labelPlaceholder,
    errorText,
    labelId,
    labelPattern,
    labelType,
    labelValue,
    labelChange,
    isError,
}) => {
    return (
        <label className={`input-wrapper ${isError && "_error"}`} htmlFor={labelId}>
{labelText}
<input
required
type={labelType}
name={labelId}
id={labelId}
placeholder={labelPlaceholder}
pattern={labelPattern}
value={labelValue}
onChange={ (e) => labelChange (e.target.value)}
/>
{isError && <span id ="error-message">{errorText}</span>}
</label>
    )
}