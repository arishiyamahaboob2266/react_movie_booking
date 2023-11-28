import React from 'react'

const SelectTime = (props) => {

    //time slot
    const availableTimeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];


    return (
        <div>
            
            {/* Time slot Heading */}
            {props.selectedTime 
                ? 
                    <h3>
                        Selected time:
                        <strong className="text-success"> {props.selectedTime}</strong>
                    </h3>
                :
                    <h2>
                        Select a Time Slot
                    </h2>
            }
            

            {/* Time slot Buttons */}
            <div className="btn-group mb-4" role="group" aria-label="Basic outlined example">
            
                {availableTimeSlots.map((time) => (
                    <button type="button" 
                        key={time} 
                        onClick={() => props.handleTimeSlotSelect(time)} 
                        className="btn btn-outline-primary">{time}
                    </button>
                ))}
            
            </div>

            


        </div>
    )
}

export default SelectTime;