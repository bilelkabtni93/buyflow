import React from 'react';
import FormItem from '../helpers/FormItem';
import { validate } from '../helpers/Validate';


interface EmailStepProps {
    cb: (field: string, value: string) => void,
}

const EmailStep: React.FC<any> = ({ setForm, formData, navigation }) => {
    const { email } = formData;
    const { previous, next } = navigation;

    return <>
        <div className="form">
            <h3>Email</h3>
            <FormItem label="email" name="email" value={email} onChange={setForm} />
            <div>
                <button onClick={previous}>Previous</button>
                <button
                    disabled={validate({ email })}
                    onClick={next}>Next</button>
            </div>
        </div>
    </>;
};

export default EmailStep;