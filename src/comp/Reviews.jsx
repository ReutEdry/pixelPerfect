import girlImg1 from '../assets/imgs/avatar-aiysha.jpg'
import girlImg2 from '../assets/imgs/avatar-kady.jpg'
import boyImg from '../assets/imgs/avatar-arthur.jpg'
import apost from '../assets/imgs/apost.png'


export function Reviews() {
    return (
        <section className="main-layout full reviews">
            <h2 className='reviews-header'>Delivering real results for top companies. Some of our <span className="reviews-h2-span">success stories.</span></h2>
            <section className="reviews-cards">
                <div className="card">
                    <img className="card-apost" src={apost} alt="" />
                    <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <h2 className='card-name'>Kady Baker</h2>
                    <h3>Product Manager at Bookmark</h3>
                    <img className="card-person-img" src={girlImg1} alt="" />
                </div>
                <div className="card">
                    <img className="card-apost" src={apost} alt="" />
                    <p> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                    <h2 className='card-name'>Aiysha Reese</h2>
                    <h3>Founder of Manage</h3>
                    <img className="card-person-img" src={girlImg2} alt="" />
                </div>
                <div className="card">
                    <img className="card-apost" src={apost} alt="" />
                    <p> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                    <h2 className='card-name'>Arthur Clarke</h2>
                    <h3>Co-founder of MyPhysio</h3>
                    <img className="card-person-img" src={boyImg} alt="" />
                </div>
            </section>
        </section>
    )
}