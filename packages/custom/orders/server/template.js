'use strict';

module.exports = {
  order_summary_email: function(user, order, mailOptions) {
    mailOptions.html = [
    'Hi ' + user.name + ',<br><br>',
    'We have received your order.Please click',  
    '<a href="'+'http://localhost:3000/#!/orders/'+order._id+'">HERE</a>',
    'to view your order details.'+ '<br><br><br><br>', 
    'thanks and regards,'+'<br>',
    'HMD Team'
   ].join('\n\n');
    mailOptions.subject = 'Order Confirmation - Your Order with HMD [ '+ order._id +'] has been successfully placed !';
    return mailOptions;
  }
};