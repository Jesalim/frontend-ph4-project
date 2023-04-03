import React, { useEffect, useState } from 'react'
import './ticket.css'

function Ticket() {
    const [tickets, seTickets] = useState([]);
    useEffect(() => {
        fetch('https://plane-passengers.herokuapp.com/passengers')
        .then(res => res.json())
        .then(seTickets)
    }, [])