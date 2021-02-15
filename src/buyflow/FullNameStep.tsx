import React from 'react';
import FormItem from '../helpers/FormItem';
import { validate } from '../helpers/Validator';
import { BuyflowData } from "../interfaces/buyflow.interface";
import { NavigationProps } from "react-hooks-helper";

import { Wrapper } from '../styles/Form.styles';

interface FullNameStepProps {
    setForm: any,
    formData: BuyflowData,
    navigation: NavigationProps,
}

const FullName: React.FC<FullNameStepProps> = ({ setForm, formData, navigation }) => {
    const { lastName, firstName } = formData;
    const { next } = navigation;

    return <>
        <Wrapper>
            <FormItem label="First name" name="firstName" value={firstName} onChange={setForm} />
            <FormItem label="Last name" name="lastName" value={lastName} onChange={setForm} />
            <div>
                <button
                    type="button"
                    disabled={validate({ lastName, firstName })}
                    onClick={next}>Next</button>
            </div>
        </Wrapper>
    </>;
};

export default FullName;