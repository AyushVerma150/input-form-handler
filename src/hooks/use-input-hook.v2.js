import { useReducer } from "react";

const defaultReducerState = {
  value: "",
  isTouched: false,
};

const formReducerFn = (state, action) => {
  if (action.type === "INPUT") {
    const { value } = action;
    if (value.trim() === "") {
      return {
        value: "",
        isTouched: state.isTouched,
      };
    }
    return {
      value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return defaultReducerState;
  }
  return defaultReducerState;
};

const useInputHook = (validateInputFn) => {
  // Create State for Entered Value and Input's Touched State.

  const [formState, dispatchFormState] = useReducer(
    formReducerFn,
    defaultReducerState
  );

  const isValid = validateInputFn(formState.value);
  const hasError = formState.isTouched && !isValid;

  const onInputChangeHandler = (e) => {
    dispatchFormState({ type: "INPUT", value: e.target.value });
  };

  const onInputBlurHandler = () => {
    dispatchFormState({ type: "BLUR" });
  };

  const resetInputState = () => {
    dispatchFormState({ type: "RESET" });
  };

  return {
    isValid,
    hasError,
    value: formState.value,
    reset: resetInputState,
    blurHandler: onInputBlurHandler,
    changeHandler: onInputChangeHandler,
  };
};

export default useInputHook;
