import React from 'react';
import FormItem from '../helpers/FormItem';


interface FullNameStepProps {
    cb: (field: string, value: string) => void,
}

const FullName: React.FC<any> = ({ setForm, formData, navigation }) => {
    const { lastName, firstName } = formData;
    const { previous, next } = navigation;
    const fullName = `${firstName} ${lastName}`;

    return <>
        <div className="form">
            <h3>Full Name</h3>
            <FormItem label="Full Name" name="Full Name" value={fullName} onChange={setForm} />
            <div>
                <button onClick={next}>Next</button>
            </div>
        </div>
    </>;
};

export default FullName;