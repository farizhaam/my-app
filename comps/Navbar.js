
import { useUser } from '@auth0/nextjs-auth0'; 

export default function Navbar() {
        const { user, error, isLoading } = useUser();
  
        if (user) {
          

        return ( 
            <nav>
                <div className="navbar">
                    <p className="title">Wishful Wishlist</p>
                    <p>Welcome, {user.name}!</p>
                </div>
                <div className="sidenav">
                    <a href="table">List</a>
                    <a href="pieChart">Pie Chart</a> 
                    <a id="logout" href="/api/auth/logout">Logout</a> 
                </div>
            </nav>

        );

    }
}
