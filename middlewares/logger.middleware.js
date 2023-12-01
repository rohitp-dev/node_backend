const logger = (req, res, next) => {
    console.debug(`${req.method} ${req.url}`)
    return next()
}

module.exports = logger