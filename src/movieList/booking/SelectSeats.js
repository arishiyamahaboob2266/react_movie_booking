import React, { useState } from 'react';
import './SelectSeats.css'

function SelectSeats(props) {

    const [seats, setSeats] = useState( Array(100).fill(null) );

    // const totalSeats = Array(100).fill(null);
    console.log(seats);

    const handleSeatSelect = (i) => {
        const nextSquares = seats.slice();

       if( nextSquares[i] === null) { //if current clicked element's array element is null
            nextSquares[i] = i+1; //='X'
            document.querySelector('#seat-'+i).classList.add("selected");            
        } else {
            nextSquares[i] = null;
            document.querySelector('#seat-'+i).classList.remove("selected");     
        }

        setSeats(nextSquares);

        console.log(seats);
    }

    return (
        <>
            <div className='seatList mb-5'>
                {
                    seats.map( (el, ind) => 
                        <div key={ind+"n"} id={"seat-"+ind}>
                            <div onClick={ () => handleSeatSelect(ind) }>{el}</div>
                            <div>{ind+1}</div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default SelectSeats;