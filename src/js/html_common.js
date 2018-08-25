require(['config'],function(){
    require(['jquery','common'],function($){
         //获取地址请求
        let Common = function(opt){
            this.end = opt.end;
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
                let end = Date.parse(this.end);
                let timer = setInterval(countdown,1000);
                //倒计时
                function countdown(){
                    let now = Date.now();
                    let offset = parseInt((end - now)/1000);
                    if(offset <= 0){
                        clearInterval(timer);
                        $('.lasttime').hide();
                    }
                    
                    // 转剩余时间
                    let sec = offset%60;
                    let min = Math.floor(offset/60)%60;
                    let hour = Math.floor(offset/60/60)%24;
                    let days = Math.floor(offset/60/60/24);

                    // 补0操作
                    sec = sec<10 ? '0'+sec : sec;
                    min = min<10 ? '0'+min : min;
                    hour = hour<10 ? '0'+hour : hour;


                    // 拼接时间格式，写入页面
                    $('.lasttime').html(`${days}天${hour}时${min}分${sec}秒`); 
                }
                $('.aside_content').css({
                    height:$(window).height()
                })
                $(window).on('scroll',function(){
                    $('.aside_last').css({
                        display:$(window).scrollTop()>130? 'block':'none'
                    })
                })
                
                

            },
            getHotSearch(data){
                let content = '';
                content += data.map(function(item){
                    return `<a href="${item.src}"><span>${item.title}</span></a>`;
                }).join('');
                return content;             
            },
            getAddress(){       
                
                
            },
            
            
           
        }
        new Common({
            end:'2018-08-25 12:00'
        });
    })
})
   