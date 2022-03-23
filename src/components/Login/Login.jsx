import React from "react";
import styles from './Login.module.css'
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import {TextField} from "./TextField";
import * as Yup from 'yup';

const Login = () => {
    //VALIDATION SCHEMA
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password doesnt match')
            .required('Required'),
    });

    const onChangeTextField = (e) => {
        console.log(e.current.target.value)
        console.log(123)
    }

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <h1>Sign Up</h1>
                    {/*{console.log(formik.values)}*/}
                    <Form className={styles.box}>
                        <TextField onChange={onChangeTextField} label='First Name' name='firstName' type='text'/>
                        <TextField label='Last Name' name='lastName' type='text'/>
                        <TextField label='Email' name='email' type='email'/>
                        <TextField label='Password' name='password' type='password'/>
                        <TextField label='Confirm Password' name='confirmPassword' type='password'/>
                        <button className={styles.button} type='submit'>Register</button>
                        <button className={styles.button} type='reset'>Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}


// import {Form, Field} from 'react-final-form'
//
// const Login = () => {
//     const initialData = {
//         firstName: 'Andrey'
//     }
//     // debugger;
//     const onSubmit = (e) => {
//         debugger;
//     };
//     const validate = (e) => {
//         const errors = {
//
//         }
//         if (e.bio && e.bio.length < 2) {
//             errors.bio = 'Too short'
//         }
//         return errors;
//     }
//     let zxc = (data) => {
//         console.log(data)
//     }
//
//     return (
//         <div>
//             <Form onSubmit={onSubmit}
//                   validate={validate}
//                   initialValues={initialData}
//                   render={({handleSubmit}) => (
//                       <form className={styles.form} onSubmit={handleSubmit}>
//                           <div className={styles.box}>
//                               <label className={styles.text}>First Name</label>
//                               <Field className={styles.field} name="firstName" component="input"
//                                      placeholder="First Name"/>
//                           </div>
//
//                           <div className={styles.box}>
//                               <label className={styles.text}>Bio</label>
//                               <Field
//                                   name="bio"
//                                   render={({input, meta}) => (
//                                       <div>
//                                           <textarea className={styles.field} {...input} onChange={zxc({...input})}/>
//                                           {meta.touched && meta.error && <div className={styles.text}>{meta.error}</div>}
//                                       </div>
//                                   )}
//                               />
//                           </div>
//
//                           <div className={styles.box}>
//                               <label>Phone</label>
//                               <Field name="phone">
//                                   {({ input, meta }) => (
//                                       <div>
//                                           <input type="text" {...input} placeholder="Phone" />
//                                           {meta.touched && meta.error && <span>{meta.error}</span>}
//                                       </div>
//                                   )}
//                               </Field>
//                           </div>
//
//                           <button className={styles.button} type="submit">Submit</button>
//                       </form>
//                   )}/>
//         </div>
//     )
// }
export default Login;

// const Login = () => (
//     <div>
//         <h1>Login</h1>
//         <Formik
//             initialValues={{email: "", password: "", rememberMe: true}}
//             validate={values => {
//                 debugger
//                 const errors = {};
//                 if (!values.email) {
//                     errors.email = 'Required';
//                 } else if (
//                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                 ) {
//                     errors.email = 'Invalid email address';
//                 }
//                 return errors;
//             }}
//             onSubmit={(values) => {
//                 console.log(values)
//             }}
//             validationSchema={loginFormSchema}>
//             {() => (
//                 <Form>
//                     <div>
//                         <Field type={'text'} name={'email'} placeholder={'e-mail'}/>
//                     </div>
//                     <ErrorMessage name="email" component="div"/>
//
//                     <div>
//                         <Field type={'password'} name={'password'} placeholder={'password'}/>
//                     </div>
//                     <ErrorMessage name="password" component="div"/>
//
//                     <div>
//                         <Field type={'checkbox'} name={'rememberMe'}/>
//                         <label htmlFor={'rememberMe'}> remember me </label>
//                     </div>
//
//                     <button type={'submit'}>Log in</button>
//                 </Form>
//             )}
//         </Formik>
//     </div>
// );
//
// export default Login


// const LoginForm = () => {
//     return (
//         <form action="">
//             <div>
//                 <input placeholder={'Login'}/>
//             </div>
//             <div>
//                 <input placeholder={'Password'}/>
//             </div>
//             <div>
//                 <input type={'checkbox'}/> remember me
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
// const Login = () => {
//     return <div>
//         <h1>Login</h1>
//         <Form>
//             <LoginForm/>
//         </Form>
//     </div>
// }
//
// export default Login;