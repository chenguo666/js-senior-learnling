// 可选链
const info = {
    name: 'why',
    friend: {
        name: 'why',
        grilfriend: {
            name: 'humm',
        }
    }
}
// 之前
if (info&&info.friend&&info.friend.grilfriend) {
    console.log(info?.friend?.grilfriend.name);
}
// now
// console.log(info?.friend?.grilfriend?.name);
