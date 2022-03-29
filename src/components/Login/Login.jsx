import React from "react";
import styles from './Login.module.css'
import {Formik, Form} from "formik";
import {TextField} from "./TextField";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {compose} from "redux";
import {withAuthRedirectToProfile} from "../../hoc/withAuthRedirectToProfile";

const Login = (props) => {
    //VALIDATION SCHEMA
    const validate = Yup.object({
        email: Yup.string()
            .max(25, <div className={styles.error}>Must be 25 characters or less</div>)
            .required('Required'),
        password: Yup.string()
            .min(6, <div className={styles.error}>Password must be at least 6 characters</div>)
            .required('Required')
    });

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            validationSchema={validate}
            onSubmit={(values, {setSubmitting, setStatus}) => {
                props.login(values.email, values.password, values.rememberMe, setStatus, setSubmitting)
                console.log('object: ', values, values.email, values.password, values.rememberMe)
                setSubmitting(true)
            }}
        >
            {(formik
                  ) => (
                <div>
                    <h1>Sign Up</h1>
                    {/*{console.log(formik.errors)}*/}
                    <Form className={styles.box}>
                        {/*<div className={styles.error}>{formik.errors}</div>*/}
                        <TextField label='Email' name='email' type='text'/>
                        <TextField label='Password' name='password' type='password'/>
                        <TextField label='Remember Me' name='rememberMe' type='checkbox' />
                        <button className={styles.button}
                                disabled={formik.isSubmitting} type='submit'>Login</button>
                        {formik.status && <div className={styles.error}>{formik.status}</div>}
                    </Form>
                </div>
            )}
        </Formik>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

// export default connect(mapStateToProps, {login})(Login);

export default compose(

    connect(mapStateToProps, {login}),
    withAuthRedirectToProfile,
)(Login)