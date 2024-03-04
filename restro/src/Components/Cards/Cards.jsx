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
            let g = jsn?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setvalue(g);




        }


        api()
    }, [])

    // console.log(value);

    function clicked() {
        console.log("hello")


        let a = value.filter((e) =>

            e.info.avgRatingString > 4
        )
        setvalue(a);

        // console.log(a)
    }


    const [input, setinput] = useState("")

    let textt = (e) => {

        setinput(e.target.value);
        console.log(input)


    }

    const btnn = () => {
        console.log(input)

        setvalue(

            value.filter((car) => {
                return car.info.name == input;
                console.log(car.info.name);

            })
        )

    }





    return (

        <>

            <div className='inp'>
                <input type='text' placeholder='Enter Restaurants Name' onChange={textt}></input>
                <button className='btn' onClick={btnn}>Search</button>

            </div>






            <button onClick={clicked} className='btn1' >Top Rated Restro</button>


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