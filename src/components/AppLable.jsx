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
}) => {
    return (
        <label className="input-wrapper" htmlFor={labelId}>
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
<span id ="error-message">{errorText}</span>
</label>
    )
}