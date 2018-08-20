require(['config'],function(){
    require(['jquery','common'],function($){
         //获取地址请求
        let Common = function(){
            this.init();
        }     
        Common.prototype = {

            constructor:Common,
            init(){       
                $.get("../api/data/hotsearch.json",data=>{
                    $('.hotsearch').html('热门搜索：'+this.getHotSearch(data));  
                });
                $('.nav_l ul li').on('mouseover.hope',function(){
                    let $linkimg = $(this).children('.linkimg');
                    $linkimg.stop(true,true).show();
                });
                $('.nav_l ul li').on('click.hope',function(){
                    let $pic = $('.link').children('.pic');
                    let index = $(this).index();
                    $pic.eq(index).addClass('picactive');
                    $(this).addClass('liactive');
                })
                $('.nav_l ul li').on('mousemove',function(){
                    let $linkimg = $(this).children('.linkimg');
                    $linkimg.css({"display":"block"});
                    $(this).off('mouseover.hope');

                    
                })
                $('.nav_l ul li').on('mouseout',function(){
                    let $linkimg = $(this).children('.linkimg');
                    $linkimg.stop(true,true).hide(0);
                });
                
            
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
   