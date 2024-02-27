import './Cards.css'
import data from '../../Utils/Data';
import { useState } from 'react';
function Card() {
    const [pp, setpp] = useState([])

    function clic() {
        console.log("hello")
        let ne = data.filter((e) => {
            return console.log(e.info.avgRatingString > 3);

        })
        console.log(ne)
    }



    const [rate, setrateing] = useState(data);
    function clicked() {
        // console.log("hello")


        let a = data.filter((e) =>
            e.info.avgRatingString > 4


        )
        setrateing(a);
        console.log(a)

    }



    return (

        <>

            <button onClick={clicked} > click me</button>

            <button onClick={clic} className='btn2'> not clicked </button>

            <div className="cards-container">



                {

                    rate.map((data) => (


                        <div className='cards'>

                            <div className='foodimg'>
                                <img src={" https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + data.info.cloudinaryImageId}></img>
                            </div>

                            <div className='img-cont'>
                                <h4>{data.info.name}</h4>
                                <div className='rating'>{data.info.avgRatingString}</div>



                            </div>
                            <div className='foodname'>
                                <p>{data.info.cuisines[0, 1]}</p>
                                <p>{data.info.costForTwo}</p>

                            </div>





                        </div>
                    ))
                }


            </div >
        </>
    )
}
export default Card;