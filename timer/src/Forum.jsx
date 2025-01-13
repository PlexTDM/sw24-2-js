import { useEffect, useState } from "react";
import { Input, Button, Box } from "@mui/material";

const Forum = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const form = JSON.parse(localStorage.getItem('form'));
        if (form) {
            setEmail(form.email);
            setName(form.name);
        }
    }, [])


    const saveForm = (e) => {
        e.preventDefault();
        localStorage.setItem('form', JSON.stringify({
            email: email,
            name: name
        }))
    }

    return <form>
        <Box className="flex flex-col gap-4 items-center">
            <Input type="email" placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <Input type="text" placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <Button className="mx-auto w-min" onClick={saveForm}>Save</Button>
        </Box>
    </form>
}

export default Forum;