const {
  isValidName,
  isValidEmail,
  isValidPassword
} = require("../../../src/entities/user")

describe("USER VALIDATOR", () => {
  test("validate user name", async () => {
    expect(isValidName(undefined)).toBe(false)
    expect(isValidName("")).toBe(false)
    expect(isValidName("12")).toBe(false)
    expect(
      isValidName("more_than_50_characters_long_string@@@@@@@@@@@@@@@@")
    ).toBe(false)
    expect(isValidName("John Doe")).toBe(true)
  })

  test("validate user email", async () => {
    expect(isValidEmail(undefined)).toBe(false)
    expect(isValidEmail("")).toBe(false)
    expect(isValidEmail("hello world")).toBe(false)
    expect(isValidEmail("hello@world.com")).toBe(true)
  })

  test("validate user password", async () => {
    expect(isValidPassword(undefined)).toBe(false)
    expect(isValidPassword("")).toBe(false)
    expect(isValidPassword("12")).toBe(false)
    expect(isValidPassword("more_than_50_characters_long_string@@@@@@@@@@@@@@@@")).toBe(false)
    expect(isValidPassword("123")).toBe(true)
  })
})
