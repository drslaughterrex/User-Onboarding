import * as yup from "yup";

export default yup.object().shape({
	name: yup.string().required("Enter your name"),
	email: yup.string().email().required("Enter your E-mail"),
	password: yup.string().required("Set a password"),
	tos: yup.boolean().required(),
});