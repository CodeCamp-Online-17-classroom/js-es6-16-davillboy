// write code here
function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' });   //
getUserData({ firstName: 'Melissa' });
getUserData({}); 

ผลลัพธ์
getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' });
จะได้ผลลัพธ์เป็น "Your name is Alejandro and you like purple" เนื่องจากมีการส่ง object ที่มี properties firstName 
และ favoriteColor ที่มีค่าถูกส่งเข้าไปในฟังก์ชัน ซึ่งค่า firstName

getUserData({ firstName: 'Melissa' });
จะได้ผลลัพธ์เป็น "Your name is Melissa and you like green" เนื่องจากมีการส่ง object ที่มีเฉพาะ firstName
ไปให้กับฟังก์ชัน แต่ favoriteColor ไม่ได้ถูกส่งเข้ามา ดังนั้น favoriteColor

getUserData({})
จะได้ผลลัพธ์เป็น "Your name is undefined and you like green" 
เนื่องจากไม่มีการส่ง object ใดๆ เข้ามาที่มี properties firstName หรือ favoriteColor ดังนั้นทั้งสองตัวแปรจะเป็น undefined และ favoriteColor
