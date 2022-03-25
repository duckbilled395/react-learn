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
    // debugger
    //VALIDATION SCHEMA
    const validate = Yup.object({
        email: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required')
    });
// console.log(props.isAuth)

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            validationSchema={validate}
            onSubmit={values => {
                props.login(values.email, values.password, values.rememberMe)
                console.log('object: ', values, values.email, values.password, values.rememberMe)
            }}
        >
            {formik => (
                <div>
                    <h1>Sign Up</h1>
                    {/*{console.log(formik.values)}*/}
                    <Form className={styles.box}>
                        <TextField label='Email' name='email' type='text'/>
                        <TextField label='Password' name='password' type='password'/>
                        <TextField label='Remember Me' name='rememberMe' type='checkbox' />
                        <button className={styles.button} type='submit'>Login</button>
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