import { Button, Typography, Stack } from '@mui/material';
import { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const secInterval = setInterval(() => {
            setSeconds((seconds) => seconds + 1)
        }, 1000)

        return () => {
            clearInterval(secInterval);
        }
    }, [seconds, paused])

    return (
        <Stack direction="row" spacing={4} className='items-center'>
            <Typography>
                Timer Seconds: {seconds}
            </Typography>
            <Button variant={'outlined'} onClick={() => setPaused(a => !a)}>{paused ? 'Resume' : 'Pause'}</Button>
        </Stack>
    )
}

export default Timer;