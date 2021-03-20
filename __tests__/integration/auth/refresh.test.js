const request = require("supertest")

const App = require("../../../src/app")

describe("REFRESH AUTH TOKEN", () => {
  test("refresh auth token route should exists", async () => {
    const response = await request(App).post("/api/auth/refresh").send()
    expect(response.status).not.toBe(404)
  })
})
