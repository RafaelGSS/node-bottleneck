const REGEX = /([a-z]+)+$/;

function validateInput (str) {
  return REGEX.test(str)
}

module.exports = function (req, res) {
  const str = req.params.str
  console.log(`testing string "${str}"`)
  res.end(`${validateInput(str)}`)
};
