const TopClient = require('ali-topsdk').ApiClient;
       
   var client = new TopClient({
       'appkey': '33461650',
       'appsecret': '9c67742253d88795d4b5d62623e16452',
       'REST_URL': 'https://api.taobao.com/router/rest'
       });


module.exports ={
    getShop(keyword){
        return new Promise((resolve,reject)=>{
            client.execute('taobao.tbk.dg.material.optional', {
                'material_id':'17004',
                'page_size':'2',
                'q': keyword ,
                'has_coupon':'true',
                'adzone_id':'111872750050',
                'need_free_shipment':'true',
                 'is_tmall':'true',
         },function (error,response) {
          if(!error){
              resolve(response.result_list.map_data);
          }      
          else
              console.log(error);
        } 
           )
          })
    } ,

   getTbk(url){

      return new Promise ((resolve,reject) => {
        client.execute('taobao.tbk.tpwd.create', {
            'url': url,
            'text':'noMeaningValue',
            'logo':'noMeaningValue',
            'ext':'noMeaningValue',
            'user_id':'noMeaningValue'
        }, function(error, response) {
            if (!error){
                resolve(response);
            } 
            else console.log(error);
        })
        })

        

    }
}
 
       