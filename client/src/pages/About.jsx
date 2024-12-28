import { NavLink } from "react-router-dom";
// import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

const About = () => {
    
    const {user} = useAuth();
    
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                    <div className="hero-content">
                  {/* <p>We care to cure your Health</p> */}
                    <p>HI, {user ? user.username : "Welcome to our website" }</p>
                    <h1>Why Choose Us? </h1>
                    <p>
                    Comprehensive Business Reports
                    Generate detailed, in-depth reports tailored to individual business needs, covering all essential metrics and performance indicators.
                    </p>
                    <p>
                    Data-Driven Insights
                    Provide actionable insights derived from data analysis to support strategic decision-making.
                    </p>
                    <p>
                    Trend Analysis
                    Analyze historical data to identify trends and patterns that businesses can leverage for growth.
                    </p>
                    <p>
                    Customized Analytics Dashboards
                    Offer intuitive dashboards where businesses can visualize their data dynamically and interactively
                    </p>
                    <p>
                    Performance Benchmarking
                    Compare a businesses performance against industry standards and competitors to highlight areas of improvement.
                    </p>
                    <div className="btn btn-group">
                        <NavLink to="/contact">
                        <button className="btn"> Connect Now</button>
                        </NavLink>
                        <button className="btn secondary-btn">learn more</button>
                    </div>
                    </div>
                    <div className="hero-image">
                    <img
                        src="/images/about.png"
                        alt="coding buddies "
                        width="400"
                        height="500"
                    />
                    </div>
                </div>
                </section>
            </main>
    
            {/* <Analytics/> */}
        </>
    );
};

export default About;
