
const request = require("supertest");

const app = require("../../src/app");


it("Check blank data", async () => {
    const req = await request(app).post("/tipoDeProfissional").send('');
    expect(req.statusCode).toBe(400);
});

it("Check incomplete data", async () => {

    const data = {};

    const req = await request(app).post("/tipoDeProfissional").send(data);
    expect(req.statusCode).toBe(400);
});

it("Register professional type", async () => {

    const data = {
        descricao: "Professor",
        situacao: true
    };
    const req = await request(app).post("/tipoDeProfissional").send(data);
    expect(req.statusCode).toBe(201);
});

it("Check duplicate profissional type register", async () => {

    const data = {
        descricao: "Professor",
        situacao: true
    };
    const req = await request(app).post("/tipoDeProfissional").send(data);
    expect(req.statusCode).toBe(400);
});

it("Return professional type", async () => {

    const req = await request(app).get("/tipoDeProfissional/1");
    expect(req.statusCode).toBe(200);
});

it("Search professional type", async () => {

    const req = await request(app).get("/tipoDeProfissional?descricao=Professor");
    expect(req.statusCode).toBe(200);
});

it("Update professional type", async () => {

    const data = {
        descricao: "Professor2 ",
        situacao: true
    };
    const req = await request(app).put("/tipoDeProfissional/1").send(data);
    expect(req.statusCode).toBe(200);
});

it("Delete professional type", async () => {

    const req = await request(app).delete("/tipoDeProfissional/1");
    expect(req.statusCode).toBe(200);
});