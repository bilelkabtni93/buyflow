import React from "react";

interface FormItemProps {
    label?: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: () => void;
    otherProps?: Object;
}

const FormItem: React.FC<FormItemProps> = ({ label, children, type = "text", ...otherProps }) => (
    <div>
        {type === "text" ? (
            <>
                <label>{label}</label>
                <input type={type} {...otherProps} />
            </>
        ) : (
                <>
                    <label />
                    <input type={type} {...otherProps} />
                    {label}
                </>
            )}
    </div>
);

export default FormItem;
