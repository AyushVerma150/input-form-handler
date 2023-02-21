import useInputHook from "../hooks/use-input-hook.v2";

const BasicForm = () => {
  const {
    value: firstName,
    reset: resetFirstName,
    isValid: firstNameValid,
    hasError: firstNameError,
    blurHandler: firstNameBlurHandler,
    changeHandler: firstNameChangeHandler,
  } = useInputHook((val) => val.trim() !== "");

  const {
    value: lastName,
    reset: resetLastName,
    isValid: lastNameValid,
    hasError: lastNameError,
    blurHandler: lastNameBlurHandler,
    changeHandler: lastNameChangeHandler,
  } = useInputHook((val) => val.trim() !== "");

  const {
    value: email,
    reset: resetEmail,
    isValid: emailValid,
    hasError: emailError,
    blurHandler: emailBlurHandler,
    changeHandler: emailChangeHandler,
  } = useInputHook((val) => val.includes("@"));

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!firstNameValid || !lastNameValid || !emailValid) return;

    // reset form
    resetEmail();
    resetLastName();
    resetFirstName();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div
          className={firstNameError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="name">First Name</label>
          <input
            id="name"
            type="text"
            value={firstName}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameError && (
            <span className="error-text">{"First Name cannot be Empty!"}</span>
          )}
        </div>
        <div
          className={lastNameError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="name">Last Name</label>
          <input
            id="name"
            type="text"
            value={lastName}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
          />
          {lastNameError && (
            <span className="error-text">{"Last Name cannot be Empty!"}</span>
          )}
        </div>
      </div>
      <div className={emailError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          id="name"
          type="text"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailError && (
          <span className="error-text">{"Please enter a valid E-mail!"}</span>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!firstNameValid || !lastNameValid || !emailValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
