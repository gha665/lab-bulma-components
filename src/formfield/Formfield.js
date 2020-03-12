import React from 'react';

const FormField = ({ type, placeholder }) => {
	return (
		<div className="field">
			{/* <label className='label'>{props.label}</label> */}
			<div class="field">
				<label class="label">Name</label>
				<div class="control">
					<input class="input" type={type} placeholder={placeholder} />
				</div>
			</div>
		</div>
	);
};

export default FormField;
