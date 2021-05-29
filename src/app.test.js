
const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('Hello World, I am Autochef!');
  });
});

describe('Path : /cupboard', () => {
  test('It should return a list of items in the cupboard', async () => {
    const response = await request(app).get('/cupboard');
    expect(response.statusCode).toBe(200);
    expect(response.body)
      .toContainEqual(
        expect.objectContaining({"_id": expect.anything(), "name": "rice", "stock": 1})
      )
  });
});

