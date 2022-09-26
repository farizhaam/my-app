import { useUser } from '@auth0/nextjs-auth0'; 

export default function Login() {
    const { user, error, isLoading } = useUser();
  

    return (
        <>
            <h1>Wishful Wishlist</h1>
            <a href="/api/auth/login">Login</a>
        </>

    )
}

