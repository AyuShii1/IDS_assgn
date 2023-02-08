const User = require('../models/user');


module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}


// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }


    return res.render('user_sign_up', {
        title: "Site | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "Site | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();

    return res.redirect('/');
}


module.exports.ans=function(req,res){
 const description="";
  const one=req.body.one;
  const two=req.body.two;
  const three=req.body.three;
  const four=req.body.four;
  const five=req.body.five;
  const six=req.body.six;
  const seven=req.body.seven;
  const eight=req.body.eight;
  const nine=req.body.nine;
  const ten=req.body.ten;
  const eleven=req.body.eleven;
  const twelve=req.body.twelve;
  if(one=="yes" && two=="yes" && three=="yes" &&four=="yes" && five=="yes" &&six=="yes" &&seven=="yes" &&eight=="yes" &&twelve=="yes" ){
    console.log("User seems to be infected with Covid");
    description:"User seems to be infected with Covid";
    return res.render('ans', {
        title: 'description'
    })
  }
 else if(one=="yes" && two=="yes" && three=="yes" &&four=="yes" && five=="yes" &&six=="yes" &&seven=="yes" &&eight=="yes" &&twelve=="no" ){
    console.log("User seems to be subjected to some infection");
    description:"User seems to be subjected to some infection";
    return res.render('ans1', {
        title: 'description'
    })
  }
 else if(one=="no" && two=="no" && three=="no" &&four=="no" && five=="no" &&six=="no" &&seven=="no" &&eight=="no" && nine=="no" && ten=="no" &&eleven=="no" && twelve=="no"){
    console.log("No infection and user is healtly");
    description:"No infection and user is healtly";
    return res.render('ans2', {
        title: 'description'
    })
 }
 else {
    let count;
    count=0;
    if(one=="yes"){
        count++;
    }
    if(two=="yes"){
        count++;
    }
    if(three=="yes"){
        count++;
    }
    if(four=="yes"){
        count++;
    }
    if(five=="yes"){
        count++;
    }
    if(six=="yes"){
        count++;
    }
    if(seven=="yes"){
        count++;
    }
    if(eight=="yes"){
        count++;
    }
    if(count==5){
        console.log("Please take precations");
        description:"Please take precations"; 
        return res.render('ans3', {
            title: 'description'
        })
    }
 }



 }
      
