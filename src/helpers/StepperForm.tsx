import React from "react";
import { useForm, useStep, NavigationProps } from "react-hooks-helper";

import AgeStep from "../buyflow/AgeStep";
import EmailStep from "../buyflow/EmailStep";
import FullNameStep from "../buyflow/FullNameStep";
import ReviewStep from "../buyflow/ReviewStep";

const defaultData = {
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
};


interface Step {
    id: string;
}

interface useStepType {
    step?: any,
    navigation?: NavigationProps,
}

const steps: any[] = [
    { id: "fullName" },
    { id: "age" },
    { id: "email" },
    { id: "review" },
];

const SteperForm: React.FC<useStepType> = () => {
    const [formData, setForm] = useForm(defaultData);

    const { step, navigation }: useStepType = useStep({ initialStep: 0, steps });
    const { id } = step;

    const props = { formData, setForm, navigation };

    switch (id) {
        case "fullName":
            return <FullNameStep {...props} />;
        case "age":
            return <AgeStep {...props} />;
        case "email":
            return <EmailStep {...props} />;
        case "review":
            return <ReviewStep {...props} />;
        default:
            return null;
    }
};

export default SteperForm;
