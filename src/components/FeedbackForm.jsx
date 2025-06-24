import { Formik, Form, Field } from 'formik'
import css from './FeedbackForm.module.css'

const FeedbackForm = () => {
    return (
      <Formik initialValues={{}} onSubmit={() => {}}>
            <Form className={css.form}>
                <Field type="text" name="username" className={css.field}></Field>
                <Field type="email" name="email" className={css.field}></Field>
                <button type='submit' className={css.btn}>Submit</button>     
            </Form>
      </Formik>
    );
};
  
export default FeedbackForm