import React from 'react';
import FormItem from '../helpers/FormItem';
import { validate, isValidEmail } from '../helpers/Validator';
import { BuyflowData } from "../interfaces/buyflow.interface";
import { NavigationProps } from "react-hooks-helper";
import { Wrapper } from '../styles/Form.styles';

interface EmailStepProps {
    setForm: any;
    formData: BuyflowData;
    navigation: NavigationProps;
}

const EmailStep: React.FC<EmailStepProps> = ({ setForm, formData, navigation }) => {
    const { email } = formData;
    const { previous, next } = navigation;

    return <>
        <Wrapper>
            <FormItem label="email" name="email" value={email} onChange={setForm} />
            <div>
                <button onClick={previous}>Previous</button>
                <button
                    disabled={validate({ email }) || !isValidEmail(email)}
                    onClick={next}>Next</button>
            </div>
        </Wrapper>
    </>;
};

export default EmailStep;