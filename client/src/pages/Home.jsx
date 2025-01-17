// import { Analytics } from "../components/Analytics";

// import { Footer } from "../components/Footer";
import "../CSS/home.css"

export const Home = () => {
    return (
    <>
        <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p className="home-heading">Empowering Your Business Through Visualization</p>
                    <h1>Welcome to BrightAxis Analytics</h1>
                    <p>At BrightAxis Analytics, we believe that understanding your business starts with seeing it clearly. We provide cutting-edge business analytics services powered by data visualization, transforming complex data into actionable insights.                    </p>
                    {/* <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">learn more</button>
                        </a>
                    </div> */}
                </div>

            {/* hero images  */}
            <div className="hero-image">
                <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
                />
            </div>
            </div>
            </section>
        </main>

      {/* 2nd section  */}
        {/* <Analytics /> */}

      {/* 3rd section  */}
        <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
            <div className="hero-image top-image">
                <img
                    src="/images/design.png"
                    alt="coding together"
                    width="400"
                    height="500"
                />
                </div>

            <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
            Our goal is to help businesses of all sizes gain a deeper understanding of their performance and make data-driven decisions with confidence. By turning raw data into intuitive visual dashboards, we empower leaders and teams to uncover trends, identify opportunities, and track key metrics in real time.Whether you are looking to streamline operations, optimize financial performance, or simply gain a clearer view of your business, we provide the tools and insights you need to make smarter decisions, faster.            </p>
                {/* <div className="btn btn-group ">
                    <a href="/contact">
                    <button className="btn">connect now</button>
                    </a>
                    <a href="/services">
                    <button className="btn secondary-btn">learn more</button>
                    </a>
                </div> */}
            </div>
            <div className="hero-image bottom-image">
            <img
                src="/images/design.png"
                alt="coding together"
                width="400"
                height="500"
            />
            </div>
        </div>
        </section>
        {/* <Footer/> */}
    </>
);
};