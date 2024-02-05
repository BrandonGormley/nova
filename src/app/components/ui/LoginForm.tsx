import { FormEvent, useState } from 'react';

interface LogInFormProps {
    handleSubmit: (e: FormEvent, email: string, password: string) => void;
}

export default function LoginForm({ handleSubmit }: LogInFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form
            onSubmit={(e) => handleSubmit(e, email, password)}
            className='w-full lg:w-1/3 mx-auto flex flex-col bg-gray-100 rounded-lg p-8'
        >
            <label className='flex flex-col text-gray-600'>
                <span className='my-2'>Email:</span>
                <input
                    className='rounded py-1 outline-gray-400 border-none pl-2'
                    type='text'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label className='flex flex-col text-gray-600'>
                <span className='my-2'>Password:</span>
                <input
                    className='rounded py-1 outline-gray-400 border-none pl-2'
                    type='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button className='bg-secondary hover:bg-secondary-light transition-all text-white rounded-md text-center px-4 py-2 w-full mx-auto max-w-[33%] my-4'>
                Login
            </button>
        </form>
    );
}
