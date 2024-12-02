import { useFormik, Field, Formik, Form } from 'formik';
function Signup() {
  const signupSchema = {};
  const initialState = {
    userName: '',
    email: '',
    password: '',
    confirm_password: '',
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialState,
    // validate: signupSchema,
    onSubmit: (value, { resetForm }) => {
      console.log(value);
      resetForm();
    },
  });

  return (
    <div className="w-[40%] flex justify-center items-center">
      <Formik>
        <Form
          onSubmit={handleSubmit}
          className=" w-full shadow-2xl p-3 rounded-md"
        >
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <Field
                name="userName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
                placeholder=" User Name"
                className="bg-[#FFF] outline-none focus:ring-rose-100 p-2 rounded-lg w-full"
              />
              {errors.userName && <div>{errors.userName}</div>}
            </div>
            <div>
              <Field
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                onSubmit={handleSubmit}
                value={values.email}
                placeholder="Email Id"
                className="bg-[#FFF] outline-none focus:ring-rose-100 p-2 rounded-lg w-full"
              />
              {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
              <Field
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                onSubmit={handleSubmit}
                value={values.password}
                placeholder="Password"
                className="bg-[#FFF] outline-none focus:ring-rose-100 p-2 rounded-lg w-full"
              />
              {errors.password && <div>{errors.password}</div>}
            </div>
            <div>
              <Field
                name="confirm_password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                onSubmit={handleSubmit}
                value={values.confirm_password}
                placeholder="Confirm Password"
                className="bg-[#FFF] outline-none focus:ring-rose-100 p-2 rounded-lg w-full"
              />
              {errors.confirm_password && <div>{errors.confirm_password}</div>}
            </div>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-tr from-pink-400 via-blue-400 to-red-400 py-2 px-6 rounded-lg mt-10 m-auto"
          >
            submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Signup;
