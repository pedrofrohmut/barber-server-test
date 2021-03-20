const request = require("supertest")

const App = require("../../../src/app")

describe("LOGIN USER", () => {
  it("login user route to exists", async () => {
    const response = await request(App).post("/api/auth/login").send()
    expect(response.status).not.toBe(404)
  })
})
