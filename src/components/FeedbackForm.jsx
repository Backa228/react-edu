import { Formik, Form, Field, ErrorMessage } from 'formik'
import css from './FeedbackForm.module.css'
import { useId } from 'react'
import * as Yup from 'yup'

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string().min(3, "Too short").max(256, "Too long"),
    selector: Yup.string().oneOf(["o1", "o2", "o3"]).required("Required")
})

const initialValues = {
        username: "",
        email: "hanna@com",
        message: "",
        selector: ""
}

const FeedbackForm = () => {
    const handleSubmit = (values, actions) => {
        console.log(values)
        actions.resetForm()
    }

    const nameFieldId = useId()
    const emailFieldId = useId()
    const msgFieldId = useId()
    const selFieldId = useId()

    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.form}>
            <label htmlFor={nameFieldId}>Username:</label>
            <Field id={nameFieldId} type="text" name="username" className={css.field}></Field>
            <ErrorMessage name="username" component="span" className={css.error}/>

            <label htmlFor={emailFieldId}>Email:</label>
            <Field id={emailFieldId} type="email" name="email" className={css.field}></Field>
            <ErrorMessage name="email" component="span" className={css.error}/>

            <Field as="textarea" cols="20" rows="5" name="message" id={msgFieldId}/>
            <ErrorMessage name="message" component="span" className={css.error}/>

            <Field as="select" name="selector" id={selFieldId}>
                <option value="o1">Option 1</option>
                <option value="o2">Option 2</option>
                <option value="o3">Option 3</option>
            </Field>
            <ErrorMessage name="selector" component="span" className={css.error}/>
           

            <button type="submit" className={css.btn}>Submit</button>
        </Form>
      </Formik>
    )
  }
export default FeedbackForm