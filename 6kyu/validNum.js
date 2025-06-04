function validPhoneNumber(phoneNumber){
 return phoneNumber.match(/^\(\d{3}\) \d{3}-\d{3,4}$/) ?  true : false;
}
