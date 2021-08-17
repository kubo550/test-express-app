import request from "supertest";
import createApp from "./app";


const createUser = jest.fn();


const app = createApp();


// describe('GET / all users', () => {



// })

describe('POST /register ', () => {

    beforeEach(() => {
        createUser.mockReset();
        createUser.mockResolvedValue(0)
    })

    test('should ', async () => {
        const userData = {
            username: 'kuba123',
            password: 'password123'
        };

        const a = await request(app).post('/register').send(userData)
        console.log(a);

    })

})
