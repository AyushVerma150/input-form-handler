import { useState } from "react";

const useInputHook = (validateInputFn) => {
  // Create State for Entered Value and Input's Touched State.
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const inputValueIsValid = validateInputFn(inputValue);
  const inputValueHasError = !inputValueIsValid && inputTouched;

  const onInputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onInputBlurHandler = () => {
    setInputTouched(true);
  };

  const resetInputState = () => {
    setInputValue("");
    setInputTouched(false);
  };

  return {
    value: inputValue,
    reset: resetInputState,
    isTouched: inputTouched,
    isValid: inputValueIsValid,
    hasError: inputValueHasError,
    blurHandler: onInputBlurHandler,
    changeHandler: onInputChangeHandler,
  };
};

export default useInputHook;
