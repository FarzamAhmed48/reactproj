import test1 from "../img/testimonials-1.jpg"
import test2 from "../img/testimonials-2.jpg"
import test3 from "../img/testimonials-3.jpg"


import "./Lowermiddle.css"
const Lowermiddle=()=>{
    return(
        <>
            <div className="bckcol">
                <div className="mgtp">
                    <div>
                        <h2>What people are saying?</h2>
                    </div>
                    <div>
                        <div>
                            <img src={test1} alt="" className="testimg"/>
                        </div>
                        <div>
                            <h2>Margaret E.</h2>
                        </div>
                        <div>This is fantastic!Thanks so much guys!</div>
                    </div>
                </div>
                <div className="mgtp">
                    <div>
                        <h2>What people are saying?</h2>
                    </div>
                    <div>
                        <div>
                            <img src={test2} alt="" className="testimg"/>
                        </div>
                        <div>
                            <h2>Margaret E.</h2>
                        </div>
                        <div>This is fantastic!Thanks so much guys!</div>
                    </div>
                </div>
                <div className="mgtp">
                    <div>
                        <h2>What people are saying?</h2>
                    </div>
                    <div>
                        <div>
                            <img src={test3} alt="" className="testimg"/>
                        </div>
                        <div>
                            <h2>Margaret E.</h2>
                        </div>
                        <div>This is fantastic!Thanks so much guys!</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Lowermiddle