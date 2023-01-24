import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputGroup from "../../components/InputGroup/InputGroup";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";

import './Login.css'
import { loginRequest } from "../../services/AuthService";


const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
}).required();

const Login = () => {
    const [error, setError] = useState();
    const [isSubmitting, setIsSubmitting] = useState();

    const { register, handleSubmit, formState:{ errors }} = useForm({ resolver: yupResolver(schema) })

    let location = useLocation();
    let from = location.state?.from?.pathname || '/quiz';
    const navigate = useNavigate();

    const { login, createToast } = useAuthContext();

    const onSubmit = (data) => {
        setError(undefined);
        setIsSubmitting(true);

        loginRequest(data)
            .then(res => {
                login(res.access_token, () => navigate(from, { replace: true}));
                createToast("Welcome back!", "success");
            })
            .catch(error => {
                setError(error?.response?.data?.message)   
            })
            .finally(() => setIsSubmitting(false));
    }

    return (
        <div>
            <h1>Log in</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup
                    placeholder="Email"
                    id="email"
                    register={register}
                    error={error}        
                    type="email"
                />
                <InputGroup
                    placeholder="Password"
                    id="password"
                    register={register}
                    error={error}
                    type="password"
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
}

export default Login;