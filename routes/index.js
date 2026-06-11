var express = require('express');
var router = express.Router();
var userModel = require('./users');
 
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', function(req, res, next) {
  res.render('register', { success: null });
});

router.post('/register',async function(req, res) {
  const data= new userModel({
    name: req.body.name,
    nickname: req.body.nickname,
    score: req.body.score
  })
  const user= await userModel.create([data]); 
  res.render('register',{success: 'Student Registered Successfully!'})
});

router.post('/delete/:id',async function(req,res) {
  const data= await userModel.findByIdAndDelete(req.params.id);
  res.redirect('/Allstudents');
});

router.get('/edit/:id',async function(req, res, next) {
  const student=await userModel.findById(req.params.id);
  res.render('edit',{student});
});

router.post('/edit/:id',async (req,res)=> {
  await userModel.findByIdAndUpdate(req.params.id,{
    name: req.body.name,
    nickname: req.body.nickname,
    score: req.body.score
  });
  res.redirect('/Allstudents');
})

router.get('/Allstudents', async (req,res)=> {
  const students =await userModel.find();
  res.render('allstudents',{students});
})

router.get('/find', async function(req, res) {
  const users = await userModel.find({categories : {$all : ['girl']}});
  res.send(users);
});

module.exports = router;
