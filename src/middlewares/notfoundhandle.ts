export const notFoundHandler = (req, res, next) => {
    try {
        return res.status(404).json({
            message: `Path ${req.url} not found.`
        });
    } catch (error) {
        next(error)
    }
}
