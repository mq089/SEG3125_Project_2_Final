import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Calendar = () => {
    
    const [friendsList] = useState(['Big Boss', 'Kazuhira Miller', 'Ocelot']);
    const [invitedFriends, setInvitedFriends] = useState([]);

    const handleInviteFriend = (friend) => {
        if (!invitedFriends.includes(friend)) {
            setInvitedFriends([...invitedFriends, friend]);
        }
    };

    return (
        <Container>
            <h2 className='friend-header'>Invite Friends to Paintball</h2>
            <h4 className="friend-header">Schedule a time</h4>   
            <input className='check-input-right' type="datetime-local" id="indDate" name="indDate"/>
            <h3 className='friend-header'>Select Friends to Invite</h3>
            <ListGroup>
                {friendsList.map((friend, index) => (
                    <ListGroup.Item key={index}>
                        {friend}
                        <Button className='invite-btn' onClick={() => handleInviteFriend(friend)}>+</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h2 className='friend-header'>Invited Friends</h2>
            <ListGroup>
                {invitedFriends.map((friend, index) => (
                    <ListGroup.Item key={index}>{friend}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default Calendar;
