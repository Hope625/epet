jQuery(function($){
    //获取地址请求
    let Region = function(){

        this.init();
    }
    
   Region.prototype = {
    constructor:Region,
    init(){
        //通过Ajax请求获取所有地址数据,暂未实现
        $.ajax({
            url: '../api/data/region.json',
            type: 'get',
            dataType: 'json',
        })
        .done(function(data){
            console.log(data);
            let address_box = $('<div />');
            let address_top = $('<div />');
            address_top.html(`<span class="province"></span><span class="city"></span><span class="region"></span>`);
            //tab标签
            address_top.appendTo(address_box);
            let address_content = $('<div />');
            //address内容
            let province_ul = $('<ul />');
            province_ul.appendTo(address_content); 
            address_content.appendTo(address_box);
            address_box.appendTo($('.address'));
        });
        //通过Ajax获取热搜数据
        $.ajax({
            url: '../api/data/hotsearch.json',
            type: 'GET',
            dataType: 'json',
        })
        .done(function(data) {
            $('.hotsearch').html('热门搜索：'+data.map(function(item){
            return `<a href="${item.src}"><span>${item.title}</span></a>`;
           }).join(''))
        })
        
        

    },
    
    getAddress(){       
        
        
    },
    }
    new Region();


})