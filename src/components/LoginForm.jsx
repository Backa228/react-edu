/* #region Неконтрольована форма */
import { useId, useState } from 'react'

// const LoginForm = ({ onLogin }) => {
//     const loginId = useId()
//     const passwordId = useId()
//     const handleSubmit = (evt) => {
//         evt.preventDefault()

//         const form = evt.target
//         const {login, password} = form.element
        
//         console.log(form)
//         console.log(login, password)

//         onLogin({
//             login: login.value,
//             password: password.value,
//         })

//         console.log(login.value, password.value)

//         form.reset()
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//         <label htmlFor={loginId}>Login: </label>
//             <input type="text" name="login" />
//             <br />
//             <label htmlFor={passwordId}>Password: </label>
//             <input type="password" name="password" />
//             <br />
//             <button type="submit">login</button>
//         </form>
//     )
// }

// export default LoginForm;
/* #endregion Неконтрольована форма */
/* #region Контрольована форма */
const LoginForm = () => {
    const [values, setValues] = useState({
      login: "",
      password: "",
    });
  
    const handleChange = (evt) => {
      setValues({
        ...values,
        [evt.target.name]: evt.target.value,
      });
    };
  
    const handleSumit = (evt) => {
      evt.preventDefault();
  
      console.log(values);
  
      setValues({
        login: "",
        password: "",
      });
    };
  
    return (
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="login"
          value={values.login}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
};
  
export default LoginForm
/* #endregion Контрольована форма */