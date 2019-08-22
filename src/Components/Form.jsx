import React from 'react';
// import axios from "axops";
import { Form, Field, withFormik} from "formik";
// import * as Yup from "yup";

const UserForm = () =>{
    return(
        <div className="form-parent">
            <Form>
                <Field name="name" type="text" placeholder="Name"/>
                <Field name="email" type="email" placeholder="email@email.com"/>
                <Field name="password" type="password" placeholder="password"/>
                <button>Submit!</button>
            </Form>
        </div>
    )
}

export default UserForm;