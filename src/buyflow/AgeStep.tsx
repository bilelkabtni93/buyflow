import React from 'react';

import FormItem from '../helpers/FormItem';
import { validate } from '../helpers/Validate';

import { BuyflowData } from "../interfaces/buyflow.interface";
import { NavigationProps } from "react-hooks-helper";

import { Wrapper } from '../styles/Form.styles';

interface AgeStepProps {
    setForm: any;
    formData: BuyflowData;
    navigation: NavigationProps;
}

const AgeStep: React.FC<AgeStepProps> = ({ setForm, formData, navigation }) => {
    const { age } = formData;
    const { previous, next } = navigation;

    return <>
        <Wrapper>
            <FormItem type="number" label="Age" name="age" value={age?.toString()} onChange={setForm} />
            <div>
                <button type="button" onClick={previous}>Previous</button>
                <button type="button" disabled={validate({ age })} onClick={next}>Next</button>
            </div>
        </Wrapper>
    </>;
};

export default AgeStep;