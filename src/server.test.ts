import axios from "axios"

const request = axios.create({
    baseURL: 'http://localhost:5000/'
})

describe('app', () => {
    test('should be status ok on / path', async () => {
        const resp = await request.get('/');
        expect(resp.status).toBe(200);
    });

    test('should specify json in the content type header on / ', async () => {
        const resp = await request.get('/');
        const type = resp.headers['content-type'];
        expect(/application\/json/.test(type)).toBe(true);
    });

})


describe('create user', () => {
    test('post on /login without username or password should be 400 error', async () => {
        const incorrectUserData = {
            username: '',
            password: ''
        }
        try {
            await request.post('/register', incorrectUserData);

        } catch (e) {
            expect(e.response.status).toBe(400);
        }

    })

    test('should create an user', async () => {
        const correctUserData = {
            username: 'kuba123',
            password: 'password123'
        }

        const { data } = await request.post('/register', correctUserData);

        expect(data?.user?.insertId).toBeDefined()
    })


    xtest('should delete all users from db', async () => {

        await request.delete('/register')

    })


})


