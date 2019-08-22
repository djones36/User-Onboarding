import React from 'react';
import axios from "axios";
import { Form, Field, withFormik, Formik, yupToFormErrors} from "formik";
import * as Yup from "yup";

const UserForm = ({errors, touched, values}) =>{
    return(
        <div className="form-parent">
            <Formik>
            <Form>
                <Field name="user" type="text" placeholder="User Name"/>
                {touched.user && errors.user && (
                    <p className="error">{errors.user}</p>
                )}
                <Field name="email" type="email" placeholder="email@email.com"/>
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}
                <Field name="password" type="password" placeholder="password"/>
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
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
            </Formik>
        </div>
    );
}
const FormikUserForm = withFormik({
    mapPropsToValues({ user, email, password, terms}){
        return{
            user: user || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },
    validateSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
    }),

    handleSubmit(values, { setStatus }) {
        axios
          .post("<https://reqres.in/api/users/>", values)
          .then(res => {
            setStatus(res.data);
          })
          .catch(err => console.log(err.response));
      }
})(UserForm);

export default UserForm;