// Middleware: only allow requests with the correct admin key
function checkAdminKey(req, res, next) {
    const key = req.headers['x-admin-key'];

    if (!key || key !== process.env.ADMIN_KEY) {
        return res.status(401).json({ message: "Unauthorized: wrong or missing admin key" });
    }

    next(); // Correct key, so you may pass!
}

export default checkAdminKey;
