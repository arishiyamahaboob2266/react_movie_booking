import React, { useEffect, useState } from 'react';
import './SelectSeats.css'
import SelectTime from './SelectTime';

function SelectSeats(props) {

    const [seats, setSeats] = useState(Array(100).fill(null));
    const [selectedTime, SetSelectedTime] = useState(null);
    const [booked, setBooked] = useState(null);

    const [ticketDetails, setTicketDetails] = useState(null);

    const handleTimeSlotSelect = (time) => {
        SetSelectedTime(time);
    };

    // const totalSeats = Array(100).fill(null);
    console.log(seats);

    const handleSeatSelect = (i) => {
        const nextSquares = seats.slice();



        if (nextSquares[i] === null) { //if current clicked element's array element is null
            nextSquares[i] = i + 1; //='X'
            document.querySelector('#seat-' + i).classList.add("selected");

            //Selected seat number
            props.selectedSeats.push(i + 1);
        } else {
            nextSquares[i] = null;
            document.querySelector('#seat-' + i).classList.remove("selected");

            //Remove Selected seat number
            const indexOfUnselectedSeat = props.selectedSeats.indexOf(i + 1);
            props.selectedSeats.splice(indexOfUnselectedSeat, 1);
        }

        console.log('selectedSeats numin array ---- ', props.selectedSeats);
        // console.log('selectedSeats num in string ---- ', selectedSeats);//selected Seats


        setSeats(nextSquares);

        // console.log(seats);
        console.log('select seats string ', props.selectedMovieID);
    }

    //Handle Confirm Booking
    const handleConfirmBooking = () => {
        const selectedSeats = props.selectedSeats.join() //selectedSeats num in string

        setBooked(props.selectedMovieID + '--,' + selectedTime + '--,' + selectedSeats);
    }

    useEffect(() => {

        localStorage.setItem("bookedMovie", booked); //working with localStorage is a side effect, We must do it inside useEffect 

        const bookedMovie_fromLocalStorage = localStorage.getItem('bookedMovie')
        console.log('local storage ', bookedMovie_fromLocalStorage);

        bookedMovie_fromLocalStorage &&
            setTicketDetails(bookedMovie_fromLocalStorage.split('--,'))

    }, [booked])



    let movieDetails = props.selectedMovieID.split('--,'); //Movie Id (packed with 'title, id, voting, backdrop_path'

    ticketDetails &&
        console.log([ticketDetails])

    const today = new Date().toLocaleDateString();


    return (
        <>
            {booked ? (

                <div className="card text-center col-sm-4">
                    <div className="card-header">
                        Your Movie Ticket 
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-success">{ticketDetails[0]}</h5>
                        <p className='my-3'>
                            <span className='border p-2 me-1'>{ticketDetails[5]}</span>
                            <span className='border p-2'>{new Date().toLocaleDateString()}</span>
                        </p>
                        <p claclassNamess="card-text">Ticket ID: #{ticketDetails[1]} | Rating: {ticketDetails[2]}</p>
                        
                    </div>
                    <div className="card-footer text-body-secondary">
                        Thank You!..
                    </div>
                </div>

            ) : (
                <div>
                    <div className='d-sm-flex'>
                        <div className='col-sm'>
                            <h2 className='text-danger'>{movieDetails[0]}</h2>

                            <p>
                                Movie ID : <strong>{movieDetails[1]} </strong>
                                | Rating : <strong>{movieDetails[2]}</strong>
                            </p>

                            <p>
                                <strong>Description: </strong>
                                {movieDetails[4]}
                            </p>

                            <SelectTime handleTimeSlotSelect={handleTimeSlotSelect} selectedTime={selectedTime} /> {/* <Select Time Component */}

                        </div>

                        <div className='col-sm-6'>
                            <img src={props.IMG_PATH + movieDetails[3]} className='img-fluid' alt="Movie Banner" />
                            {/* Movie Id (packed with 'title, id, voting, backdrop_path') */}
                        </div>
                    </div>


                    <h3>Select Seats</h3>
                    <p className='fs-5'>
                        Selected: {props.selectedSeats.map((seatNum) => <strong>{seatNum}, </strong>)}
                    </p>

                    <div className='seatList mb-5'>
                        {
                            seats.map((el, ind) =>
                                <div key={ind + "n"} id={"seat-" + ind}>
                                    <div
                                        onClick={() => (
                                            handleSeatSelect(ind)
                                        )
                                        }
                                    >
                                        {el}
                                    </div>

                                    <div>{ind + 1}</div>
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