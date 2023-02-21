import useFormHook from "../hooks/use-form-hook";

const SimpleInput = () => {
  const {
    inputValue: enteredNameValue,
    inputHasError: nameInputHasError,
    inputIsValid: nameInputIsValid,
    resetInput: resetNameInput,
    onInputBlurHandler: nameBlurHandler,
    onInputChangeHandler: nameChangeHandler,
  } = useFormHook((val) => val.trim() !== "");

  const {
    inputValue: enteredEmailValue,
    inputHasError: emailInputHasError,
    inputIsValid: emailInputIsValid,
    resetInput: resetEmailInput,
    onInputBlurHandler: emailBlurHandler,
    onInputChangeHandler: emailChangeHandler,
  } = useFormHook((val) => val.includes("@"));

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!nameInputIsValid && !emailInputIsValid) {
      return;
    }
    resetEmailInput();
    resetNameInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredNameValue}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmailValue}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
