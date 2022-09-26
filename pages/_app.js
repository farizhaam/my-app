import { UserProvider } from '@auth0/nextjs-auth0'
import Layout from '../comps/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>  
    </UserProvider>
  )
}

export default MyApp
