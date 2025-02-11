import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Ads from '../components/Ads'
import ProductSection from '../components/ProductSection'

function Home() {
    let mobileProduct = [
        {name : 'iphone 15 mini', image : 'https://inventstore.in/wp-content/uploads/2023/09/2-2.webp'},
        {name : 'samsung s24 Ultra', image : 'https://www.designinfo.in/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra-256GB-Titanium-Violet-3.webp'},
        {name : 'one plus Nord 4', image : 'https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/avalon/green.png'},
        {name : 'Nothing phone 1', image : 'https://www.jiomart.com/images/product/original/rvv3ssnjhq/nothing-phone-2-5g-12gb-ram-512gb-rom-dark-grey-smartphone-product-images-orvv3ssnjhq-p603512150-0-202308021818.jpg?im=Resize=(420,420)'}
    ]
    return (
        <div className='container-fluid'>
            <Navbar/>
            <Carousel/>
            <div className='row' style={{padding:'0 30px'}}>
                {
                    mobileProduct.map(mobile => <Ads mobile_name={mobile.name} mobile_image={mobile.image} />)
                }
            </div>
            <ProductSection/>
        </div>
    )
}

export default Home