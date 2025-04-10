import React from 'react'
import './Home.css'
import { MdProductionQuantityLimits } from "react-icons/md"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    

<div className="container">
            <header className="header" style={{background:'darkblue'}}>
           
            
                <h1 className="logo"> <MdProductionQuantityLimits style={{color:'white',fontSize:'3rem'}} />Manage Mate</h1>
                <nav>
                    <ul className="nav-links">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/productlist'>VIEW PRODUCTS</Link></li>
                        
                        <li><Link to="/aboutus">ABOUT US</Link></li>
                      
                    </ul>
                </nav>
            </header>


            <main className="main-content">
                <h2 style={{color:'black'}}>Manage Your Product With Ease</h2>
                <p style={{color:'black'}}>Effortless Product Management Streamline your workflow with our intuitive platform
</p>
            
            </main>
            <section className="testimonials">
    <h2>What Our Users Say</h2>
    <div className="testimonial-container">
        <div className="testimonial">
     
            <p>"- "Efficient and Reliable!This system has streamlined our entire produ.Highly recommend!"</p>
            <p>- Alex S.</p>
        </div>
        <div className="testimonial">
            <p>"Saved Us Time and Effort!I never realized how much time we were wasting until we started using this system. It's intuitive, fast, and incredibly organized. Highly recommended!"</p>
            <p>- Jessica M.</p>
        </div>
        <div className="testimonial">
     
            <p>"I can’t imagine running my business without it now. It’s user-friendly, comprehensive, and delivers exactly what we need."</p>
            <p>- John D.</p>
        </div>
    </div>
</section>
<footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                     
                        <h3 style={{color:'white' ,textAlign:'left'}}>About Manage Mate</h3>
                        <p  style={{color:'white',textalign:'center'}}> "Efficient and Reliable!""This system has streamlined our entire product lifecycle. From inventory tracking to performance analytics, it’s made managing everything effortless. A game-changer for businesses!"</p>
                    </div>
                    <div className="footer-section quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                        <li><Link to='/features'>Features</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                      
                            <li><a href="#contact">Contact:+91 8298102534</a></li>
                            <li><a href="#email">Email:managemate@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-section social-media">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#facebook">Facebook</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                            <li><a href="#instagram">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p style={{color:'white'}}>&copy; 2025 ManageMate. All rights reserved.</p>
                </div>
            </footer>


    </div>
  )
}

export default Home