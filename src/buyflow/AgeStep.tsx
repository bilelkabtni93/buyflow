import React from 'react';

import FormItem from '../helpers/FormItem';
import {UseStepResponse, NavigationProps } from "react-hooks-helper";

/* todo remove any */

const AgeStep: React.FC<any> = ({ setForm, formData, navigation }) => {
    const { age } = formData;
    const { previous, next } = navigation;

    return <>
        <div className="form">
            <h3>Age</h3>
            <FormItem type="number" label="Age" name="age" value={age} onChange={setForm} />
            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    </>;    
};

export default AgeStep;