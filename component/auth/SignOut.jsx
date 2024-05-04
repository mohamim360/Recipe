'use client'
import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth"
import { useRouter } from "next/navigation";

const SignInOut = () => {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const logout = () => {
        setAuth(null);
        router.push('/login')
    }

  return (
    <div>
        {
            auth ? (
                <>              
                    <a className="cursor-pointer" onClick={logout}>Logout</a>
                </>
            ) : (<Link href="/login">Login</Link>)
        }
    </div>
  )
}

export default SignInOut