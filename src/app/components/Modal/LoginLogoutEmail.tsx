import { signIn } from "next-auth/react"
import LoginLogoutButton from "./LoginLogoutButton"
import { useState, ChangeEvent, FormEvent } from 'react';

const LoginLogoutEmail = () => {

    const isShowSpin = true
    interface FormData {
        email: string;
        password: string;
    }


    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    const handleRegisterByEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                console.log('Login successful');
                // Reset form or perform other actions as needed
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form
            className="
                         w-full p-2 mt-4
                        border-1
                        rounded-lg
                         divide-y-[1px]
                        ">
            <div className='pt-3 relative'>
                <p className='
                                bottom-2 
                                px-3 
                                '>
                    Email
                </p>
                <input type='text' name="email" className="
                                w-full px-2 py-2 outline-none text-[16px] text-left
                                "
                />
            </div>
            <div className='pt-3 relative'>
                <p className='
                                bottom-2 
                                px-3 
                                '>
                    Password
                </p>
                <input type='text' name="password" className="
                                w-full px-2 py-2 outline-none text-[16px] text-left
                                "
                />
            </div>
            <LoginLogoutButton
                isShowSpin={isShowSpin}
                handleClick={handleSubmit}
            />
        </form>
    )


}
export default LoginLogoutEmail