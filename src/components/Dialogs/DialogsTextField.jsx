import React from "react";
import { useField, Field} from "formik";
// import styles from './Login.module.css'


export const DialogsTextField= ({...props}) => {

    const [field, meta] = useField(props)

    return (
        <div >
            <Field
                   {...field} {...props}
                   autoComplete='off'
            />
        </div>
    )
}