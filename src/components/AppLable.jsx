import React from "react";

export const Applable = ({
    labelText,
    labelPlaceholder,
    errorText,
    labelId,
    labelPattern,
    labelType,
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
/>
<span id ="error-message">{errorText}</span>
</label>
    )
}