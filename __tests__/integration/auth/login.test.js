const request = require("supertest")

const App = require("../../../src/app")
const { user } = require("../../../src/models")
// const { truncateDatabase } = require("../../utils/truncate")

describe("LOGIN USER", () => {
  // beforeEach(async () => {
  //   await truncateDatabase()
  // })

  test("login user route to exists", async () => {
    const response = await request(App).post("/api/auth/login").send()
    expect(response.status).not.toBe(404)
  })

  // test("login user with invalid body should return bad request", async () => {
  //   const response = await request(App).post("/api/auth/login").send({})
  //   expect(response.status).toBe(400)
  // })

  // test("login user with a not existent e-mail should return bad request", async () => {
  //   // await user.destroy({ where: { email: "john_doe@mail.com" } })
  //   await user.create({
  //     name: "John Doe",
  //     email: "john_doe@mail.com",
  //     password: "123"
  //   })
  //   const response = await request(App)
  //     .post("/api/auth/login")
  //     .send({ email: "wrong@mail.com", password: "123" })
  //   expect(response.status).toBe(400)
  // })

  // test("login user with incorrect password should return bas request", async () => {
  //   // await user.destroy({ where: { email: "john_doe@mail.com" } })
  //   await user.create({
  //     name: "John Doe",
  //     email: "john_doe@mail.com",
  //     password: "123"
  //   })
  //   const response = await request(App)
  //     .post("/api/auth/login")
  //     .send({ email: "john_doe@mail.com", password: "wrong_password" })
  //   expect(response.status).toBe(400)
  // })

  // test("login user with correct data should return ok status", async () => {
  //   // await user.destroy({ where: { email: "john_doe@mail.com" } })
  //   await user.create({
  //     name: "John Doe",
  //     email: "john_doe@mail.com",
  //     password: "123"
  //   })
  //   const response = await request(App)
  //     .post("/api/auth/login")
  //     .send({ email: "john_doe@mail.com", password: "123" })
  //   expect(response.status).toBe(200)
  // })

  // test("login user with correct data should return a valid response body", async () => {
  //   // await user.destroy({ where: { email: "john_doe@mail.com" } })
  //   await user.create({
  //     name: "John Doe",
  //     email: "john_doe@mail.com",
  //     password: "123"
  //   })
  //   const response = await request(App)
  //     .post("/api/auth/login")
  //     .send({ email: "john_doe@mail.com", password: "123" })
  //   expect(response.body).toHaveProperty("error", "")
  //   expect(response.body).toHaveProperty("data")
  //   expect(response.body).toHaveProperty("data.name", "John Doe")
  //   expect(response.body).toHaveProperty("data.email", "john_doe@mail.com")
  //   expect(response.body).toHaveProperty("token")
  // })
})
