'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Oceanic Aliens Home'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'About Oceanic Aliens'});
};

exports.help = (req, res)=>{
  res.render('home/help', {title: 'Node.js: Help'});
};
