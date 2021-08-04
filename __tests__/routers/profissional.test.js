
const request = require("supertest");

const app = require("../../src/app");


it("Check blank data", async () => {
    const req = await request(app).post("/profissional").send('');
    expect(req.statusCode).toBe(400);
});

it("Check incomplete data", async () => {

    const data = {
        nome: "Tyrone",
        email: "tyroneamorim@outlook.com"
    };

    const req = await request(app).post("/profissional").send(data);
    expect(req.statusCode).toBe(400);
});

it("Register professional", async () => {

    const data = {
        nome: "Tyrone",
        telefone: "21123456789",
        email: "tyroneamorim4@outlook.com",
        tipoDeProfissional: 1
    };
    const req = await request(app).post("/profissional").send(data);
    expect(req.statusCode).toBe(201);
});

it("Check duplicate profissional register", async () => {

    const data = {
        nome: "Tyrone",
        telefone: "21123456789",
        email: "tyroneamorim4@outlook.com",
        tipoDeProfissional: 1
    };
    const req = await request(app).post("/profissional").send(data);
    expect(req.statusCode).toBe(400);
});



it("Return professional", async () => {

    const req = await request(app).get("/profissional/1");
    expect(req.statusCode).toBe(200);
});

it("Search professional", async () => {

    const req = await request(app).get("/profissional?nome=Tyrone");
    expect(req.statusCode).toBe(200);
});

it("Update professional", async () => {

    const data = {
        nome: "Tyrone 10",
        telefone: "21123456789",
        email: "tyroneamorim20@outlook.com",
        tipoDeProfissional: 1,
        situacao: true
    };
    const req = await request(app).put("/profissional/1").send(data);
    expect(req.statusCode).toBe(200);
});

it("Delete professional", async () => {

    const req = await request(app).delete("/profissional/1");
    expect(req.statusCode).toBe(200);
});