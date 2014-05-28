'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Green Monsters Home'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'About Green Monsters'});
};

exports.help = (req, res)=>{
  res.render('home/help', {title: 'Node.js: Help'});
};
