import './Cards.css'
function Card() {
    return (
        <div className="cards-container">
            <div className='cards'>
                <div className='foodimg'>
                    <img src='https://b.zmtcdn.com/data/pictures/chains/3/143/1236f41d05304adf749f84afce938138_o2_featured_v2.jpg?output-format=webp'></img>
                </div>

                <div className='img-cont'>
                    <h4>Domino's Pizza</h4>
                    <div className='rating'>3.8*</div>



                </div>
                <div className='foodname'>
                    <p>PIZZA, Fast Food</p>
                    <p>₹100 for one</p>

                </div>





            </div>
        </div>
    )
}
export default Card;