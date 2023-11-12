const {WechatyBuilder} =require('wechaty')
const wechaty = WechatyBuilder.build() // get a Wechaty instance
const {getShop,getTbk} = require('./tbMethod');

wechaty
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message', async function (msg){
    if (await msg.mentionSelf()){
        let shopData =await getShop (msg.text());
        for (let i =0;i < shopData.length;i++){
            let urlBase = shopData[i].coupon_share_url;
            let url = 'https:' + urlBase ;
            let tkl0 = await getTbk (url);
            let preShopPrice = shopData[i].zk_final_price;
            let couponAmount = shopData[i].coupon_amount ;
            let tkl = tkl0.data.model +'!原价￥'+ preShopPrice + '['+'优惠券￥' + couponAmount+']' + '!复制内容到tao寶!'
            msg.say(tkl)}
        }else if (await msg.text() === '你是谁'){
            msg.say('我是练习时长两年半国易哥')
        }else if (await msg.text()=== 'dd'){
            msg.say('玩啥啊玩')
        }
    })
  
wechaty.start()