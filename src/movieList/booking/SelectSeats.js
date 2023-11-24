import React, { useState } from 'react';
import './SelectSeats.css'
import SelectTime from './SelectTime';

function SelectSeats(props) {

    const [seats, setSeats] = useState( Array(100).fill(null) );
    const [booked, setBooked] = useState(null);

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

        // console.log(seats);
        console.log(props.selectedMovieID);
    }

    //Handle Confirm Booking
    const handleConfirmBooking = () => {
        setBooked({
            title: props.selectedMovieID
        })
    }

    return (
        <>
            { booked ? (
                <p className='fs-1'>
                Movie: <strong>{booked.title} Booked</strong>
                </p>

            ) : (
                <div>
                    <h2 className='text-danger'>{props.selectedMovieID}</h2>

                    <SelectTime /> {/* <Select Time Component */}

                    <h3>Select Seats</h3>
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

                    <button className='btn btn-success mb-5' onClick={handleConfirmBooking}>
                        Confirm Book
                    </button>
                </div>
            )
            }
        </>
    );
}

export default SelectSeats;