// import { NavLink } from "react-router-dom";
// import { Analytics } from "../components/Analytics";
// import { useAuth } from "../store/auth";

const About = () => {
    
    // const {user} = useAuth();
    
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                    <div className="hero-content">
                  {/* <p>We care to cure your Health</p> */}
                    {/* <p>HI, {user ? user.username : "Welcome to our website" }</p> */}
                    <h1>CA Sarvesh Toshniwal </h1>
                    <p>Sarvesh Toshniwal, a Chartered Accountant (CA) with a strong passion for data analysis and business intelligence. He is a Microsoft Certified Power BI Data Analyst Associate and has cleared CFA Level 1, which has gives him a solid foundation in finance and analytical skills.

                    </p>
                    <p>
                    With a keen interest in Excel, automation, and Power BI, he has successfully handled numerous assignments, leveraging these tools to streamline processes, improve efficiency, and unlock valuable insights from data.

                    </p>
                    <p>He thrives on helping businesses make informed, data-driven decisions, and is always excited to explore innovative ways to bring data to life through visualization and automation.
                    </p>
                        {/* <div className="btn btn-group">
                            <NavLink to="/contact">
                            <button className="btn"> Connect Now</button>
                            </NavLink>
                            <button className="btn secondary-btn">learn more</button>
                        </div> */}
                    </div>
                    <div className="hero-image">
                    <img
                        src="/images/sarvesh.jpeg"
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
