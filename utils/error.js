function handleError(err, req, res, next) {
    res.render('error');
}

module.exports = {
    handleError,
}