class ValidationError extends Error {}

function handleError(err, req, res, next) {

    if (err instanceof ValidationError) {
        res.status(400);
    }

    res.render('error', {
        message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za jakiś czas.',
    });
}

module.exports = {
    handleError,
    ValidationError,
}
