// import React, { useState } from 'react';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// const EventForm = ({ handleEventAdd }) => {
//     const [eventData, setEventData] = useState({
//         name: "",
//         date_time: "",
//         location: "",
//         description: ""
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEventData({
//             ...eventData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleEventAdd({ ...eventData, id: Math.random() });  // Configure ID for the event
//         setEventData({
//             name: "",
//             date_time: "",
//             location: "",
//             description: ""
//         });
//     };

//     return (<div className='bg-light p-4'>
//         <Form onSubmit={handleSubmit}><div className='bg-success p-4'>
//             <h2 className="mt-4">Create New Event</h2>
//             <FormGroup>
//                 <Label>Name</Label>
//                 <Input type="text" name="name" value={eventData.name} onChange={handleChange} required />
//             </FormGroup>
//             <FormGroup>
//                 <Label>Date & Time</Label>
//                 <Input type="datetime-local" name="date_time" value={eventData.date_time} onChange={handleChange} required />
//             </FormGroup>
//             <FormGroup>
//                 <Label>Location</Label>
//                 <Input type="text" name="location" value={eventData.location} onChange={handleChange} required />
//             </FormGroup>
//             <FormGroup>
//                 <Label>Description</Label>
//                 <Input type="textarea" name="description" value={eventData.description} onChange={handleChange} required />
//             </FormGroup>
//             <Button type="submit" color="primary">Add Event</Button></div>
//         </Form></div>
//     );
// };

// export default EventForm;
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EventForm = ({ handleEventAdd }) => {
    const [eventData, setEventData] = useState({
        name: "",
        date_time: "",
        location: "",
        description: "",
        image: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEventAdd({ ...eventData, id: Math.random() });  // Configure ID for the event
        setEventData({
            name: "",
            date_time: "",
            location: "",
            description: "",
            image: ""
        });
    };

    return (
        <div className=' p-4'>
            <Form onSubmit={handleSubmit}>
                <div className='bg-secondary p-4'>
                   
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="name" value={eventData.name} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Date & Time</Label>
                        <Input type="datetime-local" name="date_time" value={eventData.date_time} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Location</Label>
                        <Input type="text" name="location" value={eventData.location} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="description" value={eventData.description} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Image URL</Label>
                        <Input type="text" name="image" value={eventData.image} onChange={handleChange} placeholder="URL of image" />
                    </FormGroup>
                    <Button type="submit" color="primary">Add Event</Button>
                </div>
            </Form>
        </div>
    );
};

export default EventForm;