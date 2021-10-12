export default function validation(values) {
  let errors = {};
  console.log(values);
  // Email
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email";
  }

  // Password
  if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
    errors.password = "Invalid Password";
  }

  return errors;
}
