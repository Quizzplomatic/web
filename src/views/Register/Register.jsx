import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputGroup from "../../components/InputGroup/InputGroup";
import './Register.css';
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { registerRequest } from "../../services/AuthService";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8, 'Password has to be at least 8 characters long').required()
}).required();

const Register = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { createToast } = useAuthContext();

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = data => {
        setIsSubmitting(true);

        registerRequest(data)
            .then(user => {
                navigate('/login');
                createToast('Registered successfully!', 'success');
            })
            .catch(err => {
                if(err.response.status === 409){
                    setError('email', {message: 'Email already exists'});
                }
            })
            .finally(() => setIsSubmitting(false));
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup
                    placeholder="Name"
                    type="text"
                    id="name"
                    register={ register }
                    error={errors.name?.message}
                />
                <InputGroup
                    placeholder="Email"
                    type="email"
                    id="email"
                    register={ register }
                    error={errors.email?.message}
                />
                <InputGroup
                    placeholder="Password"
                    type="password"
                    id="password"
                    register={ register }
                    error={errors.password?.message}
                />
                <button type='submit' className={`new-button ${isSubmitting ? 'submitting' : ''}`}>
                    {
                        isSubmitting 
                        ? <span>Loading...</span>
                        : <span>Submit</span>
                    }
                </button>
            </form>
        </div>
    )
};

export default Register;