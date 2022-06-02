const response = (response, msg, code = 200) => {
  const rcode = 500 || 403 || 401 || 400
  return response.status(code).json({
    status: code === rcode ? false : true,
    message: msg
  })
}

module.exports = { response }