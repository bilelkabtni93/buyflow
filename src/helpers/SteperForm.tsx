import React from "react";
import { useForm, useStep, NavigationProps } from "react-hooks-helper";

import AgeStep from "../buyflow/AgeStep";


interface Step {
    id: string;
}

interface useStepType {
    step: any,
    navigation: NavigationProps,
}

const steps: any [] = [
  { id: "age" },
];

const SteperForm: React.FC<any>  = () => {
  const [formData, setForm] = useForm({});
  const { step, navigation }: useStepType = useStep({ initialStep: 0, steps });
  const { id } = step;


  const props = { formData, setForm, navigation };

  switch (id) {
    case "age":
      return <AgeStep {...props} />;
    default:
      return null;
  }
};

export default SteperForm;
