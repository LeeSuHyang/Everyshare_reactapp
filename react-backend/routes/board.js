const express = require('express');
const pool = require('../config/pool');
const router = express.Router();


/* 게시판 관련 */

/* insert문 */
router.post('/write', async (req, res, next) => {

    var data = req.body.write

    var postType = data.postType
    var writerNum = data.writerNum
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

    var sqlQuery = 'INSERT INTO lendBoard set ?'
    var sqlData = { 
                    postType:postType, postWriterNum:writerNum, postWriter:writer, location:currentLocation,
                    postTitle:boardTitle, productCategory:writeCategory, postContents:boardContents, pricePerDay:dayPerPrice,
                    pricePerWeek:weekPerPrice, pricePerMonth:monthPerPrice, minPeriod:minTerm, maxPeriod:maxTerm, 
                    rentalPeriodType:rentalPeriodType, guarantee:guarantee, state:state
                  }

    const conn = await pool.getConnection()

    try {
      const data = await conn.query(sqlQuery, sqlData)
      
      await conn.commit() 
      return res.json(data)

    } catch (error) {
      console.log(err,'lendBoard의 insert가 수행되지 않았습니다.')
      conn.rollback()
    } finally {
      conn.release() // pool에 connection 반납
    }
});

/* select 문 */
router.get('/', async (req, res, next) => {
  
  const conn = await pool.getConnection()
  //1이 빌려주는 게시판 2가 빌리는 게시판
  const productCategory = req.query.category
  console.log(productCategory)

  var sqlQuery = '(SELECT postNum,postWriterNum,userID,nickName,postTitle,postDate,state, 1 as type ' +
                 ' FROM lendBoard left join userInfo on lendBoard.postWriterNum = userInfo.userNum where lendBoard.productCategory =\"' + productCategory + '\" AND state not in(3))' +
                 'UNION (SELECT postNum,postWriterNum,userID,nickName,postTitle,postDate,state, 2 as type' +
                 ' FROM requestboard left join userInfo on requestboard.postWriterNum = userInfo.userNum where requestboard.productCategory =\"' + productCategory + '\" AND state not in(3)) order by postDate DESC'
  
  try {
    const data = await conn.query(sqlQuery)
    await conn.commit() 
    
    return res.json(data[0])

  } catch (err) {
    console.log(err,'게시판 목록을 가져오지 못했습니다.')
    conn.rollback()
  } finally {
    conn.release() // pool에 connection 반납
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
