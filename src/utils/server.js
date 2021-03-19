const {
  PRODUCTION_ENV,
  DEVELOPMENT_ENV,
  TEST_ENV,
  PRODUCTION_ENV_PATH,
  DEVELOPMENT_ENV_PATH,
  TEST_ENV_PATH
} = require("../app/constants")

const getEnvPath = (strEnv) => {
  let path = null
  if (strEnv == PRODUCTION_ENV) {
    path = PRODUCTION_ENV_PATH
  }
  if (strEnv == DEVELOPMENT_ENV) {
    path = DEVELOPMENT_ENV_PATH
  }
  if (strEnv == TEST_ENV) {
    path = TEST_ENV_PATH
  }
  if (path === null) {
    throw new Error(`Path could not be set with the env passed: ${strEnv}`)
  }
  return path
}

const validateEnv = (strEnv) => {
  if (!strEnv) {
    return false
  }
  if (strEnv == PRODUCTION_ENV || strEnv == DEVELOPMENT_ENV || strEnv == TEST_ENV) {
    return true
  } else {
    return false
  }
}

module.exports = {
  getEnvPath,
  validateEnv
}
