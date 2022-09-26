
import { useUser } from '@auth0/nextjs-auth0'; 

export default function Navbar() {
        const { user, error, isLoading } = useUser();
  
        if (user) {
          

        return ( 
            <nav>
                <div className="top-nav">
                    <h1>My App</h1>
                    <h3>Welcome {user.name}!</h3>
                    <a href="/api/auth/logout">Logout</a> 
                </div>
                <div className="side-nav">
                    <a href="index">Home</a>
                    <a href="pieChart">Pie Chart</a> 
                </div>
            </nav>

        );

    }
}
