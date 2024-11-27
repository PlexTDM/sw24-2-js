import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors())
server.use(express.urlencoded({ extended: true }));

server.get('/', async (req, res) => {
    const id = req.query.id;
    if (!id) res.status(404).json({ message: 'enter username in query' });
    try {
        const pp = await getPP(req.query.id);
        res.json({ pp: pp });
        // console.log(req.query.id);
    } catch (err) {
        res.status(500).json({ message: err })
    }
});
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
})


import axios from 'axios';
import 'dotenv/config';

const API_URL = 'https://osu.ppy.sh/api/v2'
const { CLIENT_ID, CLIENT_SECRET } = process.env
const getToken = async () => {
    const params = {
        client_id: parseInt(CLIENT_ID),
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
        scope: 'public'
    }
    const { data } = await axios.post('https://osu.ppy.sh/oauth/token', params)
    return data.access_token
}
export const getPP = async (user, mode = 'osu') => {
    const token = await getToken()

    const { data } = await axios.get(`${API_URL}/users/${user}/${mode}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return data.statistics.pp;
}

export const getIdByName = async (name) => {
    if (name instanceof Number) return "Only Enter String"
    const user = await getUser(name)
    return user.id
}

export const getUser = async (id) => {
    if (!id) return "Provide Username or Id"
    const token = await getToken()
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    const { data } = await axios.get(`https://osu.ppy.sh/api/v2/users/${id}`, { headers: headers })
    return data
}