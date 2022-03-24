import React from "react";
import { ErrorMessage, useField, Field} from "formik";
import styles from './Login.module.css'


export const TextField = ({label, onChange, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <div className={styles.box}>
            <label htmlFor={field.name}>{label}</label>
            <Field className={styles.field}
                   {...field} {...props}
                   autoComplete='off'
            />
            <ErrorMessage name={field.name} />
        </div>
    )
}