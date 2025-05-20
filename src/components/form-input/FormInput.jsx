import './FormInput.scss'

const FormInput = ({ label, type, name, value, onChange }) => {
   return (
			<div className="group">
				<input
					className="form-input"
					type={type}
					required
					onChange={onChange}
					name={name}
					value={value}
				/>
				{label && (
					<label htmlFor={name} className={`form-input-label ${value.length ? "shrink" : ""}`}>
						{label}
					</label>
				)}
			</div>
		);
}

export default FormInput;