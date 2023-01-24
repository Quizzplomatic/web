import react from "react";
import './InputGroup.css';

const InputGroup = ({ id, type, placeholder, register, error }) => {
    return (
        <div>
            <input
                type={type}
                className={`mt-3 form-control ${error ? 'is-invalid' : '' }`}
                id={id}
                placeholder={placeholder}
                {...register(id)}
            />
            { error && <div className="invalid-feedback">{error}</div> }
        </div>
    )
};

export default InputGroup;