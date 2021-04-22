import React, { useState } from "react";
import Signup from "./signup";
import FormSuccess from "./formSuccess";

const FormSignUp = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className="formSignup">
				{!isSubmitted ? <Signup submitForm={submitForm} /> : <FormSuccess />}
			</div>
		</>
	);
};

export default FormSignUp;
