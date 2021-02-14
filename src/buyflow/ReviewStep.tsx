import React from "react";
import { Link } from 'react-router-dom';

const Review: React.FC<any> = ({ setForm, formData, navigation }) => {
    const {
        lastName,
        firstName,
        email,
        age,
    } = formData;

    const { go } = navigation;

    return (
        <div className="form">
            <h3>Review your data</h3>
            <h4>
                Name
        <button onClick={() => go("fullName")}>Edit</button>
            </h4>
            <div>
                firstName: {`${firstName}`}        <br />
            lastName: {`${lastName}`}
            </div>
            <h4>
                Age
        <button onClick={() => go("age")}>Edit</button>
            </h4>
            <div>
                Age: {`${age}`}
                <br />
            </div>
            <h4>
                Email
        <button onClick={() => go("email")}>Edit</button>
            </h4>
            <div>
                Email: {`${email}`}
                <br />
            </div>
            <div>
                <div>
                    <Link to='/purchased=dev_ins'>Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default Review;