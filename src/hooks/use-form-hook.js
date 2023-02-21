import { useState } from "react";

const useFormHook = (validateInputFn) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueIsTouched, setInputValueIsTouched] = useState(false);

  const inputIsValid = validateInputFn(inputValue);
  const inputHasError = inputValueIsTouched && !inputIsValid;

  const onInputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onInputBlurHandler = () => {
    setInputValueIsTouched(true);
  };

  const resetInput = () => {
    setInputValue("");
    setInputValueIsTouched(false);
  };

  return {
    inputValue,
    inputHasError,
    inputIsValid,
    resetInput,
    onInputBlurHandler,
    onInputChangeHandler,
  };
};

export default useFormHook;
