import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return {
    props: { gadgets: data }
  }
}

const Gadgets = ({ gadgets }) => {
  console.log(gadgets)

  return (
    <div>
      <h1>Wishful Wishlist</h1>

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
}
 
export default Gadgets;

