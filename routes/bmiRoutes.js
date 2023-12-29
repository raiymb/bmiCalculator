const express = require('express');
const path = require('path');
const router = express.Router();
const { calculateBMI } = require('../controllers/bmiController');
const BMIRecord = require('../models/BMIRecord'); 

router.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '..', 'views', 'index.html');
    res.sendFile(indexPath);
});

router.get('/history', (req, res) => {
    const historyPath = path.join(__dirname, '..', 'views', 'history.html');
    res.sendFile(historyPath);
});

router.get('/home', (req, res) => {
    const homePath = path.join(__dirname, '..', 'views', 'home.html');
    res.sendFile(homePath);
});

router.post('/calculate-bmi', async (req, res) => {
    try {
        const { weight, height, age, gender, unit } = req.body;

        const bmiResult = calculateBMI(weight, height, age, gender, unit);

        const bmiRecord = new BMIRecord({
            weight,
            height,
            age,
            gender,
            unit,
            bmi: bmiResult.bmi,  
            timestamp: new Date(),
        });

        await bmiRecord.save();

        res.json({ bmi: bmiResult.bmi, interpretation: bmiResult.interpretation });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/hist', async (req, res) => {
    try {
        const history = await BMIRecord.find().sort({ timestamp: 'desc' });

        res.json(history);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;