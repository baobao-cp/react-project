import React, { useEffect, useState } from 'react'
import './style.scss'

const formatTime = (date) => {
    const day = date.toLocaleDateString();
    const hours = `${date.getHours()}`.padStart(2, '0')
    const minutes = `${date.getMinutes()}`.padStart(2, '0')
    const seconds = `${date.getSeconds()}`.padStart(2, '0')
    return `${day} ${hours}h:${minutes}:${seconds}`
}

function Clock() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const stringTime = formatTime(new Date())
            setTime(stringTime)
        }, 1000)

        return () => clearInterval(interval)
    }, [])
    return (
        <div class="box5">
            <p>{time}</p>
        </div>
    )
}

export default Clock