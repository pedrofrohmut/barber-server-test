const request = require("supertest")

const App = require("../../../src/app")
const { user } = require("../../../src/models")
// const { truncateDatabase } = require("../../utils/truncate")

describe("CREATE USER", () => {
  // beforeEach(async () => {
  //   await truncateDatabase()
  // })

  test("create user route should exists", async () => {
    const response = await request(App).post("/api/users").send()
    expect(response.status).not.toBe(404)
  })

  // test("create user with invalid body should return bad request", async () => {
  //   const response = await request(App).post("/api/users").send({})
  //   expect(response.status).toBe(400)
  // })

  // test("create user with an e-mail in use should return bad request", async () => {
  //   // await user.destroy({ where: { email: "john_doe@mail.com" } })
  //   const createdUser = await user.create({
  //     name: "John Doe",
  //     email: "john_doe@mail.com",
  //     password_hash: "123"
  //   })
  //   const john = await user.findOne({ where: { email: "john_doe@mail.com" } })
  //   const response = await request(App).post("/api/users").send({
  //     name: "John Doe 2",
  //     email: "john_doe@mail.com",
  //     password: "123"
  //   })
  //   expect(response.status).toBe(400)
  // })

  // test("create user with valid body should return ok status", async () => {
  //   // await user.destroy({ where: { email: "john_doe@mail.com" } })
  //   const response = await request(App)
  //     .post("/api/users")
  //     .send({ name: "John Doe", email: "john_doe@mail.com", password: "123" })
  //   expect(response.status).toBe(200)
  // })

  // test("create user with valid body to return a valid response body", async () => {
  //   // await user.destroy({ where: { email: "john_doe@mail.com" } })
  //   const response = await request(App)
  //     .post("/api/users")
  //     .send({ name: "John Doe", email: "john_doe@mail.com", password: "123" })
  //   expect(response.body).toHaveProperty("error", "")
  //   expect(response.body).toHaveProperty("data")
  //   expect(response.body).toHaveProperty("data.name", "John Doe")
  //   expect(response.body).toHaveProperty("data.email", "john_doe@mail.com")
  //   expect(response.body).toHaveProperty("token")
  // })
})
