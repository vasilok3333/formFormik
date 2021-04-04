import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import "./FormLogin.css"

const FormLogin = () => {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', checkbox: false }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('Invalid email address')
            .required('Required field'),
          password: yup
            .string()
            .min(6, 'password must be longer than 6 characters')
            .required('Required field'),
          checkbox: yup
            .boolean()
            .required('Required field'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false);
         
        }}
      >
        <Form className="form">
          <h1 className="formTitle">Sign in to your account</h1>

          <Field
            name="email"
            type="email"
            placeholder="user2000@gmail.com"
            className="formInput"
          />
          <ErrorMessage name="email" component="div" className="error" />

          <Field
            name="password"
            type="password"
            placeholder="* * * * * * * * "
            className="formInput formPassword"
          />
          <ErrorMessage name="password" component="div" className="error" />

          <div class="checkbox">
            <Field
              name="checkbox"
              type="checkbox"
              id="checkbox"
              className="formCheckbox"
            />
            <label htmlFor="checkbox">Keep me signed in</label>
            <ErrorMessage name="checkbox" component="div" className="error" />
          </div>
          <button type="submit" className="btnSign">
            <span className="btnTitle">Sign in</span>
          </button>
          <a href="#" className="footerLink">Forgot your password?</a>
        </Form>
      </Formik>
    </>
  );
};

export default FormLogin;