const path = require('path');
const router = require('express').Router();


//get html (index.html) to display when running the server
//also add middleware above to display all other files called static()
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


module.exports = router;