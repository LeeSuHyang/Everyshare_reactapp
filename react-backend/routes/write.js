const express = require('express');
const pool = require('../config/pool')
const router = express.Router();


/* 빌려주는 게시판 관련 */
/* insert문 */
router.post('/', async (req, res, next) => {

   var data = req.body.write
    
    var postNum = data.postNum
    var postType = data.postType
    var writer = data.writer
    var currentLocation = data.currentLocation   
    var boardTitle = data.boardTitle

    var writeCategory = data.writeCategory
    var boardContents = data.boardContents
    var dayPerPrice = data.dayPerPrice
    var weekPerPrice = data.weekPerPrice
    var monthPerPrice = data.monthPerPrice

    var minTerm = data.minTerm
    var maxTerm = data.maxTerm
    var rentalPeriodType = data.rentalPeriodType
    var guarantee = data.guarantee
    var state = data.state

    const conn = await pool.getConnection()
    try {
      const data = await conn.query('INSERT INTO lendBoard set ?', {postNumL:postNum, postTypeL:postType , postWriterL:writer, location:currentLocation,
      postTitle:boardTitle, productCategory:writeCategory, postContents:boardContents, pricePerDay:dayPerPrice,
      pricePerWeek:weekPerPrice,pricePerMonth:monthPerPrice, minPeriod:minTerm, maxPeriod:maxTerm, rentalPeriodType:rentalPeriodType,
       guarantee:guarantee, state:state})
      
      await conn.commit() 
      return res.json(data)

    } catch (error) {
      console.log('insert 요청에 실패하였다')
      console.log(err)
      conn.rollback()
    } finally {
      conn.release() // pool에 connection 반납
    }
});

/* select 문 */
router.get('/', async (req, res, next) => {
 
  try {
    const data = await pool.query('select * from customerInfo')
    return res.json(data[0])

  } catch (err) {
    console.log(res)
    return res.status(500).json(err)
  }
  
});

/* update 문 */
router.put('/', async (req, res, next) => {
 
  try {
    const data = await pool.query('select * from customerInfo')
    return res.json(data[0])

  } catch (err) {
    return res.status(500).json(err)
  }
  
});

/* delete(삭제되면 state 값만 수정)문 */
router.delete('/', async (req, res, next) => {
 
  try {
    const data = await pool.query('select * from customerInfo')
    return res.json(data[0])

  } catch (err) {
    return res.status(500).json(err)
  }
  
});

module.exports = router;
