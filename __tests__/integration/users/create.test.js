const request = require("supertest")

const App = require("../../../src/app")
const { user } = require("../../../src/models")

describe("CREATE USER", () => {
  test("create user route should exists", async () => {
    const response = await request(App).post("/api/users").send()
    expect(response.status).not.toBe(404)
  })

  test("create user with invalid body should return bad request", async () => {
    const response = await request(App).post("/api/users").send({})
    expect(response.status).toBe(400)
  })

  test("create user with valid body should return ok status", async () => {
    await user.truncate({ cascade: true, restartIdentity: true })
    const response = await request(App)
      .post("/api/users")
      .send({ name: "John Doe", email: "john_doe@mail.com", password: "123" })
    expect(response.status).toBe(200)
  })

  test("create user to return a valid user body", async () => {
    await user.truncate({ cascade: true, restartIdentity: true })
    const response = await request(App)
      .post("/api/users")
      .send({ name: "John Doe", email: "john_doe@mail.com", password: "123" })
    expect(response.body).toHaveProperty("error")
    expect(response.body).toHaveProperty("data")
    expect(response.body).toHaveProperty("token")
  })
})
