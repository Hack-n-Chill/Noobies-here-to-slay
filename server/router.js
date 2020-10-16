const express = require('express')
const router = express.Router()
const { getAllRooms } = require('./users');
router.get('/', (req, res) => {
    res.send('server is up and running')
})
router.get("/room", function (req,res) {
	 const data=getAllRooms();
	 res.status(200).send(data);
});

module.exports = router