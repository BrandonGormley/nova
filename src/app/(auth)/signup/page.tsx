import SignUpForm from '@/app/components/ui/SignUpForm';

export default function SignupPage() {
    return (
        <main className='flex-1 py-8 px-6 flex flex-col min-h-screen w-full max-w-[1440px] mx-auto'>
            <h2 className='text-2xl font-bold mb-8 w-full mx-auto text-gray-800 text-center'>
                Sign Up
            </h2>
            <SignUpForm />
        </main>
    );
}
