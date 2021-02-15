import React from "react";
import { Link } from 'react-router-dom';
import { Wrapper } from '../styles/Form.styles';

const SummaryStep: React.FC<any> = ({ setForm, formData, navigation }) => {
    const {
        lastName,
        firstName,
        email,
        age,
    } = formData;

    const { go } = navigation;

    return (
        <Wrapper>
            <h4>Review your data</h4>
            <p>
                <b>First Name:</b> {`${firstName}`}<br />
                <b>Last Name:</b> {`${lastName}`}<br />
                <button onClick={() => go("fullName")}>Edit</button>
            </p>

            <p>
                <b>Age:</b> {`${age}`} years<br />
                <button onClick={() => go("age")}>Edit</button>
            </p>

            <p>
                <b>Email:</b> {`${email}`}<br />
                <button onClick={() => go("email")}>Edit</button>
            </p>
            <br />
            <button>
                <Link to='/purchased=dev_ins'>Purchase</Link>
            </button>
        </Wrapper>
    );
};

export default SummaryStep;