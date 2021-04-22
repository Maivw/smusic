import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { signUp } from "../../action/index";

const useForm = (callback, validate) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [values, setValues] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		setErrors(validate(values));
		setIsSubmitting(true);
		auth
			.createUserWithEmailAndPassword(values.email, values.password)
			.then((userAuth) => {
				dispatch(
					signUp({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
					})
				);
				history.push("/home");
			})
			.catch((err) => alert(err.message));
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
