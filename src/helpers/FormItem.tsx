import React from "react";

interface FormItemProps {
    label?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: () => void;
    otherProps?: Object;
}

const FormItem: React.FC<FormItemProps> = ({ label, children, type = "text", ...otherProps }) => (
    <div>
        {type === "text" ? (
            <>
                <label>{label?.toLocaleUpperCase()}</label>
                <input type={type}
                    autoComplete="off"
                    placeholder={`Please enter your ${label} `} {...otherProps} />
            </>
        ) : (
                <>
                    <label />
                    <input type={type}
                        autoComplete="off"
                        placeholder={`Please enter your ${label} `} {...otherProps} />
                    {label}
                </>
            )}
    </div>
);

export default FormItem;
