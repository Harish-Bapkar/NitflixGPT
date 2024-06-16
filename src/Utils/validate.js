const validate = (email, password, fullName) => {
  const isEmailValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
  if (!isEmailValid) {
    return "Enter valid Email adrres";
  }

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isPasswordValid) {
    return "Enter Valid Password";
  }

  if (fullName.length === 0) {
    return "Enter Name";
  }

  return null;
};

export default validate;
