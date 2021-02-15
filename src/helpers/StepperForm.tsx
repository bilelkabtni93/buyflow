import React from "react";
import { useForm, useStep, NavigationProps } from "react-hooks-helper";

import AgeStep from "../buyflow/AgeStep";
import EmailStep from "../buyflow/EmailStep";
import FullNameStep from "../buyflow/FullNameStep";
import SummaryStep from "../buyflow/SummaryStep";

import { BuyflowData } from "../interfaces/buyflow.interface";

const defaultData: BuyflowData = {
    firstName: "",
    lastName: "",
    age: 1,
    email: "",
};

interface useStepType {
    step?: any,
    navigation?: NavigationProps,
}

const steps: any[] = [
    { id: "fullName" },
    { id: "age" },
    { id: "email" },
    { id: "summary" },
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
        case "summary":
            return <SummaryStep {...props} />;
        default:
            return null;
    }
};

export default SteperForm;
