import { format } from 'date-fns';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const BookingModal = (props) => {
    const {option, selectedDate, setModalShow} = props;
    const {name, slots} = option;

    

    const handleSubmit = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const slot = form.slot.value;
      const data = {
        name, email, slot, date:selectedDate
      }
      console.log(data);
      setModalShow(false);
     
    }
   
    return (
        <Modal
         {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <form onSubmit={handleSubmit}>
              
                <input className='form-control my-3' disabled type="text" name="date" id="date" value={format(selectedDate, 'PP')} />
                <select name="slot" className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                  
                  {
                    slots.map( (slot, index) => <option key={index} value= {slot}>{slot}</option> )
                  }
                 
                </select>
                <input className='form-control  my-3' type="text" name="name" id="name" placeholder="Full Name" />
                <input className='form-control  my-3' type="tel" name="phone" id="phone" placeholder="Phone Number" />
                <input className='form-control  my-3' type="email" name="email" id="email" placeholder="Email" />
                <input className='btn btn-success text-light w-100' type="submit" value="Book"  />
            </form>
           

        </Modal.Body>
      </Modal>
    );
};

export default BookingModal;