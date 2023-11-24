import React,{useState}from 'react'

const SelectTime=()=>{
    const[selectedTime,SetSelectedTime]=useState(null);

//time slot
const availableTimeSlots=['10:00 AM','11:00 AM','2:00 PM','3:00 PM'];
const handleTimeSlotSelect=(time)=>{
      SetSelectedTime(time);
    };
 
    return(
    <div>
        <h2>Select a Time Slot</h2>
        <ul>
            {availableTimeSlots.map((time)=>(<li key={time} onClick={()=>handleTimeSlotSelect(time)}>{time}</li>
))}
        </ul>
        {selectedTime&&<p>Seleected time:{selectedTime}</p>}
    </div>
)
};
export default SelectTime;
            