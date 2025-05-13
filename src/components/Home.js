import '../Css/Home.css'; // Import the CSS file
import Home_page2 from '../pages/HomePage_2';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax'; // Import necessary hooks

function Home() {
  // Vertical Parallax for the hero section
  const parallax = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',  // Easing function for smooth animation
    translateY: [0, 100],   // Moves the element from 0px to 100px vertically
  });

  return (
      <section>
        <div ref={parallax.ref}> {/* Applying vertical parallax effect to this div */}
          <div className="heroContainer">
            <h1 className="heroTitle" data-aos="zoom-in-down">
              Your Journey to Mental Wellness Starts Here
            </h1>
            <p className="heroSubtitle" data-aos="fade-down">
              Track your mood, journal your thoughts, and access personalized
              resources to improve your mental well-being. Join our supportive
              community on the path to better mental health.
            </p>
            <div className="heroButtons">
              <button className="heroButton primaryButton" data-aos="fade-down">
                Start Your Journey
              </button>
              <button className="heroButton secondaryButton" data-aos="fade-down">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* You can also apply vertical parallax to the Home_page2 component */}
        <Home_page2 />
      </section>
  );
}

export default Home;

