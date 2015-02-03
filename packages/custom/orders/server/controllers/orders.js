'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
config = require('meanio').loadConfig(),
  //crypto = require('crypto'),
  nodemailer = require('nodemailer'),
  templates = require('../template'),
  Order = mongoose.model('Order');
 /* _ = require('lodash');*/

/**
 * Find order by id
 */
exports.order = function(req, res, next, id) {
  Order.load(id, function(err, order) {
    if (err) return next(err);
      if (!order) return next(new Error('Failed to load article ' + id));
        req.order = order;
        next();
  });
};

function sendMail(mailOptions) {
  var transport = nodemailer.createTransport(config.mailer);
  transport.sendMail(mailOptions, function(err, response) {
    if (err) return err;
    return response;
  });
}

/**
 * Create an order
 */
exports.create = function(req, res) {
  /*console.log(req.body);*/
  var order = new Order(req.body);
  order.user = req.user;
  order.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the order'
      });
    }
    /*var subject='Order Confirmation - Your Order with Flipkart.com [OD31108044000]has been successfully placed!';*/
    var subject='Order Confirmation - Your Order with HMD [ '+ order._id +'] has been successfully placed !';
    var mailOptions = {
          to: req.user.email,
          bcc:'saurabh.chawla@jktech.com',
          subject: subject,
          from: config.emailFrom
        };
        console.log('mailOptions');
        console.log(mailOptions);
        mailOptions = templates.forgot_password_email(req.user, req, null, mailOptions);
        sendMail(mailOptions);

    res.json(order);
  });
};

/**
 * List of Orders
 */
exports.all = function(req, res) {
  var currentuser = {
     user: req.user
  };
  Order.find(currentuser).sort('-created').populate('user', ' name username').exec(function(err, orders) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the orders'
      });
    }
    res.json(orders);
  });
};

/**
 * Show an order
 */
exports.show = function(req, res) {
  res.json(req.order);
};
