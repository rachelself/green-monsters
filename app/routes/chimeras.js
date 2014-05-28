'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');

  chimeras.find().toArray((err, records)=>{
    //console.log(records);
    res.render('chimeras/index', {chimeras: records, title: 'All Green Monsters'});
  });
};

exports.show = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');
  var _id = Mongo.ObjectID(req.params.id);

  chimeras.findOne({_id:_id}, (err, record)=>{
    res.render('chimeras/show', {chimera: record, title: 'Your Green Monster'});
  });
};

exports.new = (req, res)=>{
    res.render('chimeras/new', {title: 'New Monster'});
  };


exports.destroy = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');
  var _id = Mongo.ObjectID(req.params.id);

  chimeras.findAndRemove({_id:_id}, (err, record)=>{
    res.redirect('/chimeras');
  });
};


exports.create = (req, res)=>{

  var head;

  switch(req.body.head){
    case 'alien':
      head = 'alien-head.png';
      break;
    case 'shrek':
      head = 'shrek-head.png';
      break;
    case 'mike':
      head = 'mike-wazowski-head.png';
  }

  var body;

  switch(req.body.body){
    case 'alien':
      body = 'alien-body.png';
      break;
    case 'shrek':
      body = 'shrek-body.png';
  }


  var feet;

  switch(req.body.feet){
  case 'alien':
      feet = 'alien-feet.png';
      break;
    case 'shrek':
      feet = 'shrek-feet.png';
      break;
    case 'mike':
      feet = 'mike-wazowski-feet.png';

  }

  req.body.head = head;
  req.body.body = body;
  req.body.feet = feet;

  var chimeras = global.nss.db.collection('chimeras');

  chimeras.save(req.body, (err, count)=>{
    res.redirect('/chimeras');
  });

};
