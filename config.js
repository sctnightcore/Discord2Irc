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