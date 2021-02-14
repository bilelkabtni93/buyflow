import React, { useEffect } from 'react';
import FormItem from '../helpers/FormItem';
import { validate } from '../helpers/Validate';

const FullName: React.FC<any> = ({ setForm, formData, navigation }) => {
    const { lastName, firstName } = formData;

    console.log("aaaaaa", validate({ lastName, firstName }))

    const { next } = navigation;

    return <>
        <div>
            <h3>Name</h3>
            <FormItem label="First name" name="firstName" value={firstName} onChange={setForm} />
            <FormItem label="Last name" name="lastName" value={lastName} onChange={setForm} />
            <div>
                <button
                    type="button"
                    disabled={validate({ lastName, firstName })}
                    onClick={next}>Next</button>
            </div>
        </div>
    </>;
};

export default FullName;