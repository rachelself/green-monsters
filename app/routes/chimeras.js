'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');

  chimeras.find().toArray((err, records)=>{
    //console.log(records);
    res.render('chimeras/index', {chimeras: records, title: 'Chimeras'});
  });
};

exports.show = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');
  var _id = Mongo.ObjectID(req.params.id);

  chimeras.findOne({_id:_id}, (err, record)=>{
    res.render('chimeras/show', {chimera: record, title: 'Chimeras'});
  });
};

exports.new = (req, res)=>{
    res.render('chimeras/new', {title: 'New Chimera'});
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
    case 'angler':
      head = 'angler-head.jpg';
      break;
    case 'diver':
      head = 'diver-head.jpg';
      break;
    case 'shark':
      head = 'shark-head.jpg';
      break;
    case 'whale':
      head = 'whale-head.jpg';
  }

  var body;

  switch(req.body.body){
    case 'angler':
      body = 'angler-body.jpg';
      break;
    case 'diver':
      body = 'diver-body.jpg';
      break;
    case 'shark':
      body = 'shark-body.jpg';
      break;
    case 'whale':
      body = 'whale-body.jpg';
  }


  var tail;

  switch(req.body.tail){
    case 'angler':
      tail = 'angler-tail.jpg';
      break;
    case 'diver':
      tail = 'diver-tail.jpg';
      break;
    case 'shark':
      tail = 'shark-tail.jpg';
      break;
    case 'whale':
      tail = 'whale-tail.jpg';
  }

  req.body.head = head;
  req.body.body = body;
  req.body.tail = tail;

  var chimeras = global.nss.db.collection('chimeras');

  chimeras.save(req.body, (err, count)=>{
    res.redirect('/chimeras');
  });

};
