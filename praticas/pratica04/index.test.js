const supertest = require('supertest');
const app = require('./index');
const request = supertest(app);

test('deve retornar 200 no get', async function(){
    const response = await request.get("/");
    expect(response.status).toBe(200);

})
test('deve retornar 201 no post', async function(){
    const response = await request.post('/');
    expect(response.status).toBe(201);
})
test('deve retornar 200 no put', async function(){
    const response = await request.put('/');
    expect(response.status).toBe(200);
})
test('deve retornar 204 no delete', async function(){
    const response = await request.delete('/');
    expect(response.status).toBe(204);
})
