// write your custom hook here to control your checkout form
import {useState} from "react";

export const useForm = key =>{
  const [value, setValue] = useState(key);
  const [showSuccess, setShowSuccess] = useState(true)


  const handleChanges = (e) =>{
    setValue({...value, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setShowSuccess(true);
    console.log(showSuccess);
    //setValue('');
  }

  return [value, setValue, handleChanges, handleSubmit, showSuccess, setShowSuccess]
}
