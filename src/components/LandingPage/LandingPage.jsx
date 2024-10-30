import React from 'react';
import styles from './LandingPage.module.css'



const LandingPage = () => {

    const handleClick = () => {
        window.location.href = '/products'; 
    };
  return (
    <section className={styles.main}>
        <div className={styles.writing}>
            <div className={styles.leftlanding}>
                <h1 >
                    Welcome To Paradise Nursery
                </h1>
                <p>
                Your Green Oasis Awaits!
                </p>
                <button onClick={handleClick}>Shop Now</button>


            </div>
            <div className={styles.rightlanding}>
                <p>
                Welcome to Paradise Nursery, where we bring the beauty and serenity of nature right to your doorstep. Whether you’re searching for fragrant herbs, healing medicinal plants, or vibrant indoor greens, we have thoughtfully chosen each plant to help you create a personal oasis. Our mission is to make it easy for everyone to experience the joy and benefits of a greener space, adding freshness and tranquility to any setting. Let us inspire your journey to cultivate a home filled with life, wellness, and natural beauty!
                </p>


            </div>
        

        </div>
        
 
 
    </section>
  );
}

export default LandingPage;
