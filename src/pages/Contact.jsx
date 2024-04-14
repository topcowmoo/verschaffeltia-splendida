import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 20) {
    errors.name = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length > 25) {
    errors.message = "Must be 25 characters or less";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={formik.handleSubmit} className="bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="mt-1 p-2 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-myaccent focus:border-myaccent"
          />
          {formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="mt-1 p-2 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-myaccent focus:border-myaccent"
          />
          {formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="mt-1 p-2 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-myaccent focus:border-myaccent"
          />
          {formik.errors.message ? <div className="text-red-500">{formik.errors.message}</div> : null}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-mygray hover:bg-accent text-white hover:text-mygray font-bold py-2 px-4 rounded shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
