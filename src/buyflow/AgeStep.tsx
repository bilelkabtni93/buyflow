import React, { useState } from 'react';

import FormItem from '../helpers/FormItem';

interface AgeStepProps {
    cb: (field: string, value: number) => void,
}

/* todo remove any */

const AgeStep: React.FC<any> = ({ setForm, formData, navigation }) => {
    const { phone, email } = formData;
    const { previous, next } = navigation;

    return <>
        <div className="form">
            <h3>Age</h3>
            <FormItem label="Age" name="phone" value={phone} onChange={setForm} />
            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    </>;    
};

export default AgeStep;