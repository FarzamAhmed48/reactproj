import iPhone from "../img/bg-showcase-1.jpg"
import pic from "../img/bg-showcase-2.jpg"
import img from "../img/bg-showcase-3.jpg"


import "./Middle.css"
const Middle = ()=>{
    return(
        <>
            <div>
                <div className="midcard">
                    <div className="cardtxt">
                        <h2>
                            Fully Responsive Design
                        </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas consequatur magnam temporibus dolorum porro minus cum ea, aspernatur quasi eum blanditiis nostrum commodi unde iure velit exercitationem officiis veniam beatae possimus.</p>
                    </div>
                    <div>
                        <img src={iPhone} alt="" className="im7" />
                    </div>
                </div>
                <div className="midcard">
                    <div>
                        <img src={pic} alt="" className="im7" />
                    </div>
                    <div className="cardtxt">
                        <h2>
                            Updated for BootStrap 5
                        </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas consequatur magnam temporibus dolorum porro minus cum ea, aspernatur quasi eum blanditiis nostrum commodi unde iure velit exercitationem officiis veniam beatae possimus.</p>
                    </div>
                    
                </div>
                <div className="midcard">
                    <div className="cardtxt">
                        <h2>
                            Easy to Use & Customize
                        </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas consequatur magnam temporibus dolorum porro minus cum ea, aspernatur quasi eum blanditiis nostrum commodi unde iure velit exercitationem officiis veniam beatae possimus.</p>
                    </div>
                    <div>
                        <img src={img} alt="" className="im7" />
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Middle