import React from 'react'
import "../styles/componentstyle.css"
import img2 from '../images/img2.jpg'

function ProductInfo() {
  return (
    <div className='product-area'>
      <div className="product-header">
        <h1>What curls do you need?</h1>
      </div>
      <div className='product-details'>
        <div className='hydrate-me'>
          <img src={img2}/>
          <h1>hydrate me</h1>
          <p>Hydrate your skin with our premium moisturizer. Perfect for all skin types.</p>
        </div>
        <div className="style-me">
          <img src={img2}/>
          <h1>style me</h1>
          <p>Hydrate your skin with our premium moisturizer. Perfect for all skin types.</p>
        </div>
        <div className="soothe-me">
          <img src={img2}/>
          <h1>soothe me</h1>
          <p>Hydrate your skin with our premium moisturizer. Perfect for all skin types.</p>
        </div>
        <div className="protect-me">
          <img src={img2}/>
          <h1>protect me</h1>
          <p>Shield your skin from environmental stressors with our protective cream.</p>
        </div>
  </div>

    </div>
  )
}

export default ProductInfo