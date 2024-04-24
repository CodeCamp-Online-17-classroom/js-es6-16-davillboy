# js-lab-160
### Lab 160 ES6: result6
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```JavaScript
function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
getUserData({ firstName: 'Melissa' }); // **
getUserData({}); // ***
```
