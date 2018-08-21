require(['config'],function(){
    require(['jquery','common'],function($){
         //获取地址请求
        let Common = function(){
            this.init();
        }     
        Common.prototype = {
            constructor:Common,
            init(){
                //热搜       
                $.get("../api/data/hotsearch.json",data=>{
                    $('.hotsearch').html('热门搜索：'+this.getHotSearch(data));  
                });
                //导航
                $('.nav_l >ul >li >a').eq(0).addClass('navactive');
                $('.animal').show();
                $('.nav_l >ul >li').on('mouseover',function(){
                    $('.nav_l >ul >li >a').removeClass('navactive');
                    $('.nav_l >ul >li >div').hide();
                    $(this).children('a').addClass('navactive');
                   //首页导航效果
                    $(this).children('div').show();
                });
                
                let text = [];
                text = $('.change').text().split('站');
                let changetext = ['正在狗狗站溜达','正在猫猫站溜达','正在水族站溜达'];
                let outcolor = ['#459D36','#E73F85','#059EE0']
                $('.change').on('click',function(e){
                    $(this).off('mouseover');
                    let currentLi = $(this).closest('li');
                    let idx = currentLi.index();
                    $.each(text, function(index, val) {
                        if(index!=idx){
                            $('.change').eq(index).text(val+"站");
                         }
                    });           
                    $(this).css({
                        borderColor:"#AEAEAE",
                        color:"#AEAEAE",
                        backgroundColor:"#f5f5f5" 
                    });
                  

                    $.each(changetext, function(index, val){
                        console.log(index);
                        if(idx===index){
                            $('.change').eq(idx).html(val);
                        }       
                    });
                    
                    $('.animal li').css({
                        backgroundColor:'#fff'
                    });
                    
                    $(currentLi).css({
                        backgroundColor: '#f5f5f5'
                    });
                    let pic = $(currentLi).find('.pic');
                    $(pic).css({
                        backgroundColor:"#fff"
                    })
                });
                $('.change').on('mouseover',function(){
                    $(this).css({
                        color:"#fff",
                        backgroundColor:$(this).css("color")
                    })
                });
                $('.change').on('mouseout',function(){
                    let currentLi = $(this).closest('li');
                    let idx = $(currentLi).index();
                    $(this).css({
                        color:outcolor[idx],
                        backgroundColor:'#fff',
                        borderColor:outcolor[idx]
                       
                    })
                });
                $('.categories ul li').addClass('clearfix');
            },
            getHotSearch(data){
                let content = '';
                content += data.map(function(item){
                    return `<a href="${item.src}"><span>${item.title}</span></a>`;
                }).join('');
                return content;             
            },
            getAddress(){       
                
                
            }
        }
        new Common();
    })
})
   