import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import { useFormik } from 'formik';
import * as Yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir email giriniz")
    .required("Email zorunludur"),
  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalı")
    .required("Şifre zorunludur"),
});

const FormPage: React.FunctionComponent = () => {
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form verileri:", values);
      alert("Form gönderildi!");
    },
  });

  return (
    <div className="card">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Form.Text className="text-warning">
            {formik.errors.email && formik.errors.email}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Form.Text className="text-warning">
            {formik.errors.password && formik.errors.password}
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Giriş Yap
        </Button>
      </Form>
    </div>
  )
}

export default FormPage