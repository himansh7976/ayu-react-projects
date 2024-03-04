import './Cards.css'
import data from '../../Utils/Data';
import { useEffect, useState } from 'react';
function Card() {




    const [value, setvalue] = useState([]);
    const [rate, setrateing] = useState();

    useEffect(() => {
        async function api() {
            let res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            console.log(res);
            let jsn = await res.json();
            let g = jsn.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

            setvalue(g);




        }


        api()



    }, [])

    console.log(value);

    function clicked() {
        console.log("hello")


        let a = value.filter((e) =>

            e.info.avgRatingString < 2
        )
        setrateing(a);

        console.log(a)
    }


    return (

        <>

            <button onClick={clicked} className='btn1' > click me</button>


            <div className="cards-container">



                {

                    value.map((data) => (


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