import React, { useState } from 'react';
import { Container } from 'reactstrap';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import CSVUpload from '../components/CSVUpload';
import { eventsData } from '../eventsData';

const EventManagement = () => {
    const [events, setEvents] = useState(eventsData);

    const handleEventAdd = (newEvent) => {
        setEvents(prevEvents => [...prevEvents, newEvent]);
    };

    const handleCSVUpload = (newEvents) => {
        setEvents(prevEvents => [...prevEvents, ...newEvents]);
    };

    return (
        <Container>
          <h1 className="mt-4 text-center ">Create, Plan, Celebrate</h1>
          <div className="d-flex justify-content-center align-items-center ">
    <i className="text-center">Start Your Event Journey Today!</i>
</div>
  <EventForm handleEventAdd={handleEventAdd} />
            <CSVUpload handleCSVUpload={handleCSVUpload} />
            <EventList events={events} />
        </Container>
    );
};

export default EventManagement;