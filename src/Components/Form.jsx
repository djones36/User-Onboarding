import React from 'react';
// import axios from "axios";
import { Form, Field, withFormik} from "formik";
// import * as Yup from "yup";

const UserForm = ({values}) =>{
    return(
        <div className="form-parent">
            <Form>
                <Field name="name" type="text" placeholder="Name"/>
                <Field name="email" type="email" placeholder="email@email.com"/>
                <Field name="password" type="password" placeholder="password"/>
                <label className="checkmark-container">
                    Terms of Service
                    <Field
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                    />
                    <span className="checkmark"/>
                </label>
                <button>Submit!</button>
            </Form>
        </div>
    );
}
const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, terms}){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },

    handleSubmit(values){
        console.log(values);
    }//Form submit code goes here
})(UserForm);

export default UserForm;