var express = require('express');
const pool = require('../config/pool')
var router = express.Router();



//모든 사용자 정보 불러옴
router.get('/', async (req, res, next) => {
 
  try {
    const data = await pool.query('select * from customerInfo')
    return res.json(data[0])

  } catch (err) {
    return res.status(500).json(err)
  }
  
})

router.post('/register', async (req, res, next) => {
 
  try {
    const data = await pool.query('select * from customerInfo')
    return res.json(data[0])

  } catch (err) {
    return res.status(500).json(err)
  }

})

router.post('/login', async (req, res, next) => {
 
  try {
    const data = await pool.query('select * from customerInfo')
    return res.json(data[0])

  } catch (err) {
    return res.status(500).json(err)
  }
  
})

module.exports = router;
