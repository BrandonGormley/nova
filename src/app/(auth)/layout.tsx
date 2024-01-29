import AuthHeader from '@/app/components/AuthHeader';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AuthHeader />
            {children}
        </>
    );
}
