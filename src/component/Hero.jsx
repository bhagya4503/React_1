const Hero = () => {
return(
    <main className="hero container">

        <div className="hero-content">
             <h1>YOUR FEET <br></br> DESERVE THE BEST</h1>
             <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP 
                YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND 
                WE'RE HERE TO HELP YOU WITH OUR SHOES. </p>
               
                <div className="hero-btn">
                  <button>Shop Now</button>
                <button id="btn">Category</button>
               </div>
                
               <div className="shoping">
                  <p>Also Available On</p>

                      <div  className="brand-icons">
                        <img src="/images/social (1).png" alt="" />
                        <img src="/images/social (2).png" alt="" />
                      </div>
                </div>
        </div>

        <div className="hero-img">
          <img src="/images/OIP.jpeg" alt="" />
        </div>


    </main>
);
}

export default Hero;