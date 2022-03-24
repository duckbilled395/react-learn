import React from "react";
import styles from './Login.module.css'
import {Formik, Form} from "formik";
import {TextField} from "./TextField";
import * as Yup from 'yup';

const Login = () => {
    // debugger
    //VALIDATION SCHEMA
    const validate = Yup.object({
        login: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        // lastName: Yup.string()
        //     .max(20, 'Must be 20 characters or less')
        //     .required('Required'),
        // email: Yup.string()
        //     .email('Email is invalid')
        //     .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        // confirmPassword: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Password doesnt match')
        //     .required('Required'),
    });

    return (
        <Formik
            initialValues={{
                login: '',
                // lastName: '',
                // email: '',
                password: '',
                rememberMe: '',
                // confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log('object: ', values)
            }}
        >
            {formik => (
                <div>
                    <h1>Sign Up</h1>
                    {/*{console.log(formik.values)}*/}
                    <Form className={styles.box}>
                        <TextField label='Login' name='login' type='text'/>
                        <TextField label='Password' name='password' type='password'/>
                        <TextField label='Remember Me' name='rememberMe' type='checkbox' />
                        <button className={styles.button} type='submit'>Register</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Login;