# Discord2Irc

บอทสำหรับใช้ในการส่งข้อมูลจาก Discord ไปกลับ irc

# วิธีการใช้

* เปิด cmd แล้วทำการ Clone repository ลง Directory ที่ต้องการ
```git
git clone https://github.com/AphoticL/Discord2Irc.git
```
* จากนั้น ให้พิมพ์
```
npm i
```
เพื่อลง Dependencies ที่ต้องใช้

* เปิดไฟล์ `config.js` แล้วปรับแก้ข้อมูลดังนี้:
```js
/* 
ตรงนี้จะใส่ channel ที่ต้องการให้เชื่อมต่อ
ห้ามทั้งสองฝั่งมีอันไหนซ้ำกันเด็ดขาด

ให้เขียนแบบนี้ คือ
'#ช่องใน irc' : 'ID ช่องในดิสคอร์ด'
เอาลูกน้ำคั่นทุกตัว เว้นตัวสุดท้าย
*/

let channelMap = {
    '#เอาช่อง irc ใส่ตรงนี้': 'เอาช่อง discord ใส่ตรงนี้',
    '#เอาช่อง irc ใส่ตรงนี้ ห้ามมีซ้ำกัน': 'เอาช่อง discord ใส่ตรงนี้ ห้ามมีซ้ำกัน'
}

/*
Don't touch this
*/
exports.channels = channelMap

// Change what name it will display in the IRC server
exports.ircName = 'ชื่อที่ต้องการให้แสดง'

// Add your own token here
exports.token = 'ใส่โทเคนบอทตรงนี้'
```
* จากนั้นให้รันบอทปกติโดยการพิมพ์
```
node bot.js
```

# commands.js
้จะเป็นตัวที่ใช้เก็บคำสั่งของบอทคำสั่งต่าง ๆ วิธีการเขียนให้ดูได้ที่ (https://www.youtube.com/watch?v=67z6vfmDQqk)[ตรงนี้]
