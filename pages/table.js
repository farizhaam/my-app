import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useUser } from '@auth0/nextjs-auth0'; 


export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return {
    props: { gadgets: data }
  }
}

const Gadgets = ({ gadgets }) => {
  console.log(gadgets)

  const { user, error, isLoading } = useUser();
  
        if (user) {
          

          return (
            <div className="container">
              <h1>The Long List</h1>

              <div className="grid">
                <div className="table-head">
                  <h3>Name</h3>
                </div>

                  {gadgets.products.map(gadget => (
                  <div key={gadget.id}>
                    
                      <h4>{ gadget.title }</h4>
                    
                </div>
                    ))}   
              </div>

              <div className="grid">
                <div className="table-head">
                  <h3>Brand</h3>
                </div>

                  {gadgets.products.map(gadget => (
                  <div key={gadget.id}>
                    
                      <h4>{ gadget.brand }</h4>
                    
                </div>
                    ))}   
              </div>

              <div className="grid">
                <div className="table-head">
                  <h3>Category</h3>
                </div>

                  {gadgets.products.map(gadget => (
                  <div key={gadget.id}>
                    
                      <h4>{ gadget.category }</h4>
                    
                </div>
                    ))}   
              </div>

              <div className="grid">
                <div className="table-head">
                  <h3>Price</h3>
                </div>

                  {gadgets.products.map(gadget => (
                  <div key={gadget.id}>
                    
                      <h4>${ gadget.price }</h4>
                    
                </div>
                    ))}   
              </div>
            </div>
          );

        return <a href="login">Login</a>
    }
  }
        
 
export default Gadgets;
