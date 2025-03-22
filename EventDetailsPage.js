import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import WeddingEventPage from "./WeddingEventPage";
import CorporateEvent from "./CorporateEvent";
import FoodCarnival from "./FoodCarnival";
import Competitions from "./Competitions";
import Concerts from "./Concerts";

const eventData = {
    "wedding-planners": [
        { name: "Elegant Weddings", venue: "Taj Hotel, Mumbai", time: "6:00 PM", description: "A grand wedding planning event with top decorators and caterers." },
        { name: "Royal Matrimony", venue: "ITC Grand, Delhi", time: "5:00 PM", description: "Experience a luxurious wedding setup with premium services." },
        { name: "Dream Weddings", venue: "Leela Palace, Bangalore", time: "7:00 PM", description: "Make your wedding a fairytale with expert planners." }
    ],
    "corporate-events": [
        { name: "Tech Summit 2025", venue: "Bangalore International Centre", time: "9:00 AM", description: "A conference featuring top industry leaders in technology." },
        { name: "Startup Expo", venue: "Pragati Maidan, Delhi", time: "11:00 AM", description: "An exhibition showcasing innovative startups." },
        { name: "Business Conclave", venue: "JW Marriott, Mumbai", time: "2:00 PM", description: "A networking event for entrepreneurs and investors." }
    ],
    "food-carnivals": [
        { name: "Street Food Fiesta", venue: "Marine Drive, Mumbai", time: "4:00 PM", description: "A carnival celebrating the best street food from across India." },
        { name: "Global Food Fest", venue: "Connaught Place, Delhi", time: "12:00 PM", description: "Experience cuisines from different countries in one place." },
        { name: "BBQ Nights", venue: "Baga Beach, Goa", time: "7:30 PM", description: "Enjoy a night of grilled delicacies by the sea." }
    ],
    "competitions": [
        { name: "Code Challenge", venue: "IIT Bombay", time: "10:00 AM", description: "A programming competition for developers and tech enthusiasts." },
        { name: "Dance Battle", venue: "JLN Stadium, Delhi", time: "6:00 PM", description: "Watch the best dancers compete for the championship." },
        { name: "Quiz Marathon", venue: "JLU Bhopal", time: "3:00 PM", description: "A knowledge-based competition for trivia lovers." }
    ],
    "concerts": [
        { name: "Kabir's Cafe", venue: "Shanmukhananda Hall, Mumbai", time: "8:00 PM", description: "A fusion music concert blending Kabir's poetry with contemporary music." },
        { name: "Rock On Night", venue: "Indigo Arena, Bangalore", time: "7:30 PM", description: "A rock concert featuring top indie bands." },
        { name: "Bollywood Beats", venue: "Siri Fort Auditorium, Delhi", time: "6:00 PM", description: "A night of Bollywood music with live performances." }
    ]
};

const EventDetailsPage = () => {
    const { eventType } = useParams();
    const events = eventData[eventType] || [];
    const [selectedEvent, setSelectedEvent] = useState(null);

    if (selectedEvent) {
        if (eventType === "wedding-planners") {
            return <WeddingEventPage />;
        } else if (eventType === "corporate-events") {
            return <CorporateEvent />;
        }
        else if (eventType === "food-carnivals") {
            return <FoodCarnival />;
        }
        else if (eventType === "competitions") {
            return <Competitions />;
        }
        else if (eventType === "concerts") {
            return <Concerts />;
        }
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">{eventType.replace('-', ' ').toUpperCase()}</h2>
            <div className="row mt-4">
                {events.map((event, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card shadow-lg p-3 mb-4" onClick={() => setSelectedEvent(event)}>
                            <div className="card-body">
                                <h5 className="card-title">{event.name}</h5>
                                <p><strong>Venue:</strong> {event.venue}</p>
                                <p><strong>Time:</strong> {event.time}</p>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventDetailsPage;
