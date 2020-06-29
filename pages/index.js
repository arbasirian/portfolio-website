import Layout from '../components/layout/layout';

const Index = () => (
    <Layout pageTitle="Home">
        <div className="home-page">
            <div className="image-container slideInLeft">
                <img src="https://img.techpowerup.org/200629/webp-net-resizeimage.jpg" />
            </div>
            <div className="desc-container slideInRight">
                <div className="full-name slideInRight">Armin Basirian</div>
                <div className="job-title">Front-End Developer</div>
                <div className="age">Since 1992</div>
            </div>
        </div>
        <style jsx>{`
            .home-page {
                display: flex;
                align-items: center;
                height: 93vh;
                justify-content: center;
            }
            .image-container {
                width: 400px;
            }
            .image-container img { 
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px;
            }
            .desc-container {
                display: flex;
                flex-direction: column;
            }
            .desc-container .full-name {
                font-size: 50px;
                font-weight: 900;
                display: inline;
                padding: 10px 22px;
                border-radius: 10px;
                background: #c82127;
                background: linear-gradient(247deg,#c82127 33%,#ff656b 100%);
                color: #fff;
                line-height: initial;
                margin-left: -50px;
            }
            .job-title {
                font-size: 29px;
                line-height: normal;
                padding: 10px 20px;
            }
            .age {
                font-size: 19px;
                padding: 0 20px;
                font-weight: 100
            }
        `}</style>
    </Layout>
);

export default Index;