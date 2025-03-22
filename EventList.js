// // import React from 'react';
// // import { Table } from 'reactstrap';

// // const EventList = ({ events }) => {
// //     return (
// //         <div>
// //             <h2 className="mt-4">Upcoming Events</h2>
// //             <Table striped>
// //                 <thead>
// //                     <tr>
// //                         <th>Name</th>
// //                         <th>Date & Time</th>
// //                         <th>Location</th>
// //                         <th>Description</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {events.map(event => (
// //                         <tr key={event.id}>
// //                             <td>{event.name}</td>
// //                             <td>{new Date(event.date_time).toLocaleString()}</td>
// //                             <td>{event.location}</td>
// //                             <td>{event.description}</td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </Table>
// //         </div>
// //     );
// // };

// // export default EventList;
// import React, { useState } from "react";
// import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const EventList = ({ events, setEvents }) => {
//     const [modal, setModal] = useState(false);
//     const [currentEvent, setCurrentEvent] = useState(null);
//     const [newEvent, setNewEvent] = useState({ name: "", date_time: "", location: "", description: "" });

//     const toggleModal = () => setModal(!modal);

//     // Handle Input Change
//     const handleChange = (e) => {
//         setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
//     };

//     // Add New Event
//     const handleAdd = () => {
//         setEvents([...events, { ...newEvent, id: Date.now() }]);
//         setNewEvent({ name: "", date_time: "", location: "", description: "" });
//     };

//     // Open Edit Modal
//     const handleEdit = (event) => {
//         setCurrentEvent(event);
//         setNewEvent(event);
//         toggleModal();
//     };

//     // Save Edited Event
//     const handleSave = () => {
//         setEvents(events.map((event) => (event.id === currentEvent.id ? newEvent : event)));
//         toggleModal();
//     };

//     // Delete Event
//     const handleDelete = (id) => {
//         setEvents(events.filter((event) => event.id !== id));
//     };

//     return (<div>

        
//         <div className="container ">
//             <h2 className=" text-center m-5">Upcoming Events</h2>
//             <div className="container bg-secondary p-5">

    
//             {/* Events Cards */}
//             <div className="row">
//                 {events.length > 0 ? (
//                     events.map((event) => (
//                         <div className="col-md-4 mb-4" key={event.id}>
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h5 className="card-title">{event.name}</h5>
//                                     <h6 className="card-subtitle mb-2 text-muted">{new Date(event.date_time).toLocaleString()}</h6>
//                                     <p className="card-text">{event.description}</p>
//                                     <p className="card-text"><small className="text-muted">{event.location}</small></p>
//                                     <div className="d-flex justify-content-between">
//                                         <Button color="warning" size="sm" onClick={() => handleEdit(event)}>Edit</Button>
//                                         <Button color="danger" size="sm" onClick={() => handleDelete(event.id)}>Delete</Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="col-12 text-center">
//                         <p>No events found</p>
//                     </div>
//                 )}
//             </div>
    
//             {/* Edit Modal */}
//             <Modal isOpen={modal} toggle={toggleModal}>
//                 <ModalHeader toggle={toggleModal}>Edit Event</ModalHeader>
//                 <ModalBody>
//                     <Form>
//                         <FormGroup>
//                             <Label>Name</Label>
//                             <Input type="text" name="name" value={newEvent.name} onChange={handleChange} />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label>Date & Time</Label>
//                             <Input type="datetime-local" name="date_time" value={newEvent.date_time} onChange={handleChange} />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label>Location</Label>
//                             <Input type="text" name="location" value={newEvent.location} onChange={handleChange} />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label>Description</Label>
//                             <Input type="text" name="description" value={newEvent.description} onChange={handleChange} />
//                         </FormGroup>
//                     </Form>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary" onClick={handleSave}>Save Changes</Button>
//                     <Button color="secondary" onClick={toggleModal}>Cancel</Button>
//                 </ModalFooter>
//             </Modal></div>
//         </div>
//         </div>
        
        
//     );};
//     export default EventList;
import React, { useState } from "react";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EventList = ({ events, setEvents }) => {
    const [modal, setModal] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [newEvent, setNewEvent] = useState({ name: "", date_time: "", location: "", description: "", image: "" });

    const toggleModal = () => setModal(!modal);

    // Handle Input Change
    const handleChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    // Add New Event
    const handleAdd = () => {
        setEvents([...events, { ...newEvent, id: Date.now() }]);
        setNewEvent({ name: "", date_time: "", location: "", description: "", image: "" });
    };

    // Open Edit Modal
    const handleEdit = (event) => {
        setCurrentEvent(event);
        setNewEvent(event);
        toggleModal();
    };

    // Save Edited Event
    const handleSave = () => {
        setEvents(events.map((event) => (event.id === currentEvent.id ? { ...newEvent, id: currentEvent.id } : event)));
        toggleModal();
    };

    // Delete Event
    const handleDelete = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    return (
        <div>
            <div className="container">
                <h2 className="text-center m-5">Upcoming Events</h2>
                <div className="container bg-secondary p-5">
                    {/* Events Cards */}
                    <div className="row">
                        {events.length > 0 ? (
                            events.map((event) => (
                                <div className="col-md-4 mb-4" key={event.id}>
                                    <div className="card">
                                        {event.image && (
                                            <img src={event.image} alt={event.name} className="card-img-top" style={{ maxHeight: "200px", objectFit: "cover" }} />
                                        )}
                                        <div className="card-body">
                                            <h5 className="card-title">{event.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{new Date(event.date_time).toLocaleString()}</h6>
                                            <p className="card-text">{event.description}</p>
                                            <p className="card-text"><small className="text-muted">{event.location}</small></p>
                                            <div className="d-flex justify-content-between">
                                                <Button color="warning" size="sm" onClick={() => handleEdit(event)}>Edit</Button>
                                                <Button color="danger" size="sm" onClick={() => handleDelete(event.id)}>Delete</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No events found</p>
                            </div>
                        )}
                    </div>

                    {/* Edit Modal */}
                    <Modal isOpen={modal} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>Edit Event</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input type="text" name="name" value={newEvent.name} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Date & Time</Label>
                                    <Input type="datetime-local" name="date_time" value={newEvent.date_time} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Location</Label>
                                    <Input type="text" name="location" value={newEvent.location} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Description</Label>
                                    <Input type="text" name="description" value={newEvent.description} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Image URL</Label>
                                    <Input type="text" name="image" value={newEvent.image} onChange={handleChange} />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={handleSave}>Save Changes</Button>
                            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default EventList;