// // Custom hook
// import { useState, useEffect } from "react";

// const useForm = () => {
//     const [formValues, setFormValues] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         password: '',
//         firstdose: '',
//         seconddose: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [submit, setSubmit] = useState(false);
    
//     const handleChange = e => {
//         const {name, value} = e.target;
//         setFormValues({
//             ... formValues,
//             [name]: value
//         });
//     };

//     const handleSubmit = e => {
//         // Prevents the refreshing of the page
//         e.preventDefault();

//     };

//     return {handleChange, handleSubmit, formValues};
// };

// export default useForm;