const { alienToInt } = require('../helpers/index');

const convertAlienNumeral = (req, res) => {
    try {
        const input = req.body.alien;

        // ตรวจสอบ input เบื้องต้น
        if (!input || typeof input !== 'string' || input.trim() === '') {
            return res.status(400).json({ error: 'Missing or invalid input.' });
        }

        // ตรวจสอบว่ามีแต่ตัวอักษร A, B, Z, L, C, D, R เท่านั้น
        const isValid = /^[ABZLCDR]+$/.test(input.toUpperCase());
        if (!isValid) {
            return res.status(400).json({
                error: 'Invalid characters. Allowed: A, B, Z, L, C, D, R only.',
            });
        }

        const result = convert(input.toUpperCase());
        res.json({ result });

    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = { convertAlienNumeral };
