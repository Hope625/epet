require(['config'],function(){
    require(['jquery','html_common','common'],function($){
        function Carousel(options){
            let defaults = {
                    ele:'',
                    index:0,
                    page:true,//是否显示分页
                    duration:5000,//轮播间隔时间
                    len:0,
                    width:770,
                    height:360,
                    type:'fade',
                    bannerBgColor:[],
                    seamless:true,
                    button:true,
                    autoplay:true
                }   
                // 扩展默认参数
                this.opt = Object.assign({},defaults,options);

                this.init();
            }
        Carousel.prototype = {
            constructor:Carousel,
            init(){
                let opt = this.opt;
                let ele = $(opt.ele);
                if(opt.page){
                    this.page = $('<div />');
                    this.page.addClass('page');
                    for(let i=0;i<opt.len;i++){
                        let span = $('<span />');
                        span.text(i+1);
                        //高亮
                        if(i===opt.index){
                            span.addClass('active');
                        }
                        span.appendTo(this.page);
                    }
                    this.page.appendTo(ele);
                }
                // 左右按钮
                if(opt.button){
                    let btnPrev = $('<span></span>')
                    btnPrev.addClass('btn-prev');
                    btnPrev.html('&lt;');

                    let btnNext = $('<span></span>');
                    btnNext.addClass('btn-next');
                    btnNext.html('&gt;') ;

                    $(this.ele).append(btnPrev);
                    $(this.ele).append(btnNext);
                }
                this.ele = ele;
                this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
                if(opt.autoplay){
                    this.play();
                    this.changeBgcolor();
                    ele.on('mouseover',()=>{
                        this.stop();
                    })
                    ele.on('mouseout',()=>{
                        this.timer = setInterval(this.autoPlay.bind(this),opt.duration);

                    })
                    $('.nav_l').on('mouseover',function(){
                        this.stop;
                    })
                }
                
                
                ele.on('click',e=>{
                    if(e.target.parentNode.className === 'page'){
                        opt.index = $(e.target).text()-1;
                        this.play();
                        this.changeBgcolor();
                    }else if(e.target.className === 'btn-prev'){
                        opt.index--;
                        this.play();
                    }else if(e.target.className === 'btn-next'){
                        opt.index++;
                        this.play();
                    }
                })

            },
            autoPlay(){
                this.opt.index++;
                this.play();
                this.changeBgcolor();       
            },
            play(){
                let opt =this.opt;
                if(opt.index>=opt.len){
                    if(opt.seamless){
                        this.ele.children('ul').css({
                            'top':0
                        })
                        opt.index = 1;
                    }                 
                    else{
                        opt.index = 0;
                    }
                }
                else if(opt.index<0){
                    opt.index = opt.seamless? opt.len-2 : opt.len -1;
                }
                let obj= {};
                if(opt.type === 'horizontal'){
                    obj.left = -opt.index * opt.width;
                    $(this.ele).children('ul').animate({left:obj.left},opt.duration);
                }else if(opt.type === 'vertical'){
                    obj.top = -opt.index*opt.height;
                    $(this.ele).children('ul').animate({top:obj.top},true);
                }else if(opt.type === 'fade'){
                    for(let i=0;i<opt.len;i++){ 
                        this.ele.find('li').css({
                            opacity:0
                        })      
                    }
                    this.ele.find('li').eq(opt.index).css({
                        opacity:1
                    })
                }
                if(this.page){ 
                    for(let i=0;i<opt.len;i++){
                        this.page.children('span').eq(i).removeClass('pageactive');
                    }
                    this.page.children('span').eq(opt.index).addClass('pageactive');
                }
            },
            stop(){
                clearInterval(this.timer);
            },

            changeBgcolor(){
                let opt = this.opt;
                let ele = $(opt.ele);
                ele.closest('#carousel').css({
                    "background-color":opt.bannerBgColor[opt.index]
                });
                
                $('#nav').css({
                    'border-color':opt.bannerBgColor[opt.index]
                });
                
                $('#nav').find('.navactive').css({
                    'height':'36px',
                    'background-color':opt.bannerBgColor[opt.index],
                    'border-color':opt.bannerBgColor[opt.index]
                });
                
                ele.find('.navactive').css({
                    "background-color":opt.bannerBgColor[opt.index]
                })      
                
            }
            
        }
        let banner = new Carousel({
            ele:'.banner',
            len:7,
            bannerBgColor:["#FFDDE1","#22277B","#FAABC1","#D44E35","#8BCEE8","#2793CE","#F46642"],
            seamless:false
        });
        let winner = new Carousel({
            ele:'.winner',
            len:4,
            page:false,
            width:280,
            height:35,
            type:'vertical',
            duration:3000,
        });
        function Sale(opt){
            let defaults ={
                ele:'',
                button:true,
                content:''
            }
            // 扩展默认参数
            this.opt = Object.assign({},defaults,opt);
            this.time = ['10:00','11:00','12:00','14:00','16:00','18:00','20:00','22:00'];
            this.init();
        }
        Sale.prototype ={
            constructor:Sale,
            init(){         
                let time =this.time;
                let date = new Date();
                let content = ``;
                let d = date.toLocaleTimeString().slice(0,-3);
                date = parseInt(d.slice(2,));
                let day = d.slice(0,2);
                for(let i=0;i<this.time.length;i++){
                    
                    if(day==='上午'){
                        if(date>=time[i].slice(0,2)&&date<time[i+1].slice(0,2)){
                            content += `<li><a href="#">${time[i]}<br />进行中</a></li>`;
                        }
                        else if(date<time[i].slice(0,2)){
                            content += `<li><a href="#">${time[i]}<br />即将开始</a></li>;`
                        }
                        else if(date>=time[i+1].slice(0,2)){
                            content += `<li><a href="#">${time[i]}<br />已结束</a></li>`;
                        }
                    }else{
                        if((date+12+':00')>=time[i]&&(date+12+':00')<time[i+1]){
                            content += `<li><a href="#">${time[i]}<br />进行中</a></li>`;
                        }
                        else if((date+12+':00')<time[i]){
                            content += `<li><a href="#">${time[i]}<br />即将开始</a></li>`;
                        }
                        else if((date+12+':00')>= time[i+1]){
                            content += `<li><a href="#">${time[i]}<br />已结束</a></li>`;
                            
                        }
                    }                         
                }
                $('.fengqiang_rt ul').html(`${content}<li><a href="#">明日<br/>预告</a></li>`);
                $('.fengqiang_rt').find("a:contains('进行中')").css({
                    "color":'#000'
                });
                $('.fengqiang_rt').find("a:contains('即将开始')").css({
                    "color":'#000'
                });
                $('.fengqiang_rt').find("a:contains('已结束')").css({
                    "color":'#999'
                });
                $('.fengqiang_rt').find('li').eq(0).children('a').addClass('saleactive');
                $('.fengqiang_rt').find('li').eq(0).children("a:contains('即将开始')").css({
                    'color':"#f00"
                });
                $('.fengqiang_rt').find('li').eq(0).children("a:contains('即将开始')").closest('.fengqiang_r').find('button').css({
                    "background-color":"#0fa"
                });
                $('.fengqiang_rt').find('li').eq(0).children("a:contains('进行中')").css({
                    'color':"#f00"
                });
                $('.fengqiang_rt').find('li').eq(0).children("a:contains('进行中')").closest('.fengqiang_r').find('button').css({
                    "background-color":"#ddd"
                });
                $('.fengqiang_rt').find('li').on('mouseover',function(){
                    $(this).removeClass('saleactive');
                    $(this).find("a:contains('即将开始')").addClass('saleactive');
                    $(this).find("a:contains('即将开始')").css({
                        "color":"#f00"
                    })
                    $(this).find("a:contains('进行中')").addClass('saleactive');
                    $(this).find("a:contains('进行中')").css({
                        "color":"#f00"
                    })
                    $(this).find("a:contains('已结束')").addClass('saleactive');
                    $(this).find("a:contains('已结束')").css({
                        "color":"#999"
                    });
                    if($('.fengqiang_rt').find('li').index==0){
                        $('.goods button').text($('.saleactive').text().slice(5,));
                    }
                    else if($('.fengqiang_rt').find('li').eq(0).children('a').hasClass('saleactive')){
                        $('.goods button').text($('.saleactive').text().slice(13,));
                        $('.fengqiang_rt').find('li').eq(0).children('.saleactive').closest('.fengqiang_r').find('button').text($('.fengqiang_rt').find('li').eq(0).children('.saleactive').text().slice(5,))
                    }
                    else{
                        $('.goods button').text($('.saleactive').text().slice(5,));
                    }
                    
                    $(this.ele).find("a:contains('明日预告')").closest('fengqiang_r').children('.fengqiang_rb').find('.goods button').text('即将开始');
                    
                    $(".goods button:contains('即将开始')").css({
                        "background-color":"#0fa"
                   })
                    $(".fengqiang_rb >img").hide();
                    $(".good button:contains('已结束')").closest('li').find('>img').show();
                })
                $('.fengqiang_rt').find('li').on('mouseout',function(){
                    $(this).eq(0).removeClass('saleactive');
                    $(this).find("a:contains('即将开始')").removeClass('saleactive')
                    $(this).find("a:contains('即将开始')").css({
                        "color":"#000"
                    })
                    $(this).find("a:contains('进行中')").removeClass('saleactive');
                    $(this).find("a:contains('进行中')").css({
                        "color":"#000"
                    })
                    $(this).find("a:contains('已结束')").removeClass('saleactive');
                    $(".goods button:contains('即将开始')").css({
                        "background-color":"#cdcdcd"
                   })
                })

                if(this.opt.button){
                    $('.btnprev').on('click',()=>{
                        if($(this.opt.ele).find('ul').css('left')==='0px'){
                            $(this.opt.ele).find('ul').css({
                                'left':'0px' 
                            })
                        }
                        else{
                            $(this.opt.ele).find('ul').css({
                                'left':(parseInt($(this.opt.ele).find('ul').css("left"))+ 120) + 'px' 
                            })
                        }

                    })
                    $('.btnnext').on('click',()=>{                  
                        if($(this.opt.ele).find('ul').css('left') === '-240px'){

                            $(this.opt.ele).find('ul').css({
                                'left':'-240px'
                            })
                        }else{     
                            $(this.opt.ele).find('ul').css({
                                'left':parseInt($(this.opt.ele).find('ul').css('left')) - 120 + 'px'
                            });
                        } 
                    })
                }
                
            }
        }

        new Sale({
            ele:'.fengqiang_rt'
        });
        function SaleGoods(opt){
            this.ele = opt.ele;
            this.init();
        }
        SaleGoods.prototype = {
            constructor:SaleGoods,
            init(){
                $.get("../api/getsalegoods.php",data=>{
                    $(this.ele).html(this.getSaleGoods(JSON.parse(data)));
                    let salegoods_a = $(this.ele).find('a');
                   $(this.ele).css({
                    'width':salegoods_a.length * salegoods_a.eq(0).outerWidth(true)
                   });
                   
                   if(data.length>4){
                        $('.goods_btnprev').on('click',()=>{
                        if($(this.ele).css('left')==='50px'){
                            $(this.ele).css({
                                "left":"50px"
                                })
                            }
                            else{
                                $(this.ele).css({
                                    "left":(parseInt($(this.ele).css('left'))+$(this.ele).find('a').outerWidth()) + 60 + 'px'
                                })

                            }
                        })

                        $('.goods_btnnext').on('click',()=>{
                            console.log($(this.ele).css('left'));
                            console.log((($('this.ele').find("a").length-4) * $(this.ele).find('a').outerWidth()-50));
                            if($(this.ele).css('left').slice(0,-2)<=(($('this.ele').find("a").length-4) * $(this.ele).find('a').outerWidth())-50){
                                $('.gooods_btnnext').off('click');
                            
                            }
                            else{
                                $(this.ele).css({
                                    "left":parseInt($(this.ele).css("left")) - $(this.ele).find('a').outerWidth()-60 +'px'
                                })
                            }

                        })
                        $('.goods').find("button:contains('进行中')").closest('li').children('img').show();
                       
                        $('.goods').find("button:contains('已结束')").closest('li').children('img').show();
                        $('.goods').find("button:contains('即将进行')").closest('li').children('img').hide();
                    }
                })
            },        
            getSaleGoods(data){
                let content = '';
                content += data.map(function(item){
                    return `<li><a href="#"><div class="goods"><img src="${item.imgurl}"><h5>${item.name}</h5><p><span class="rmb">￥</span><span>${item.sale}</span><del>(${item.price})</del></p><button>已结束</button></div></a><img src="img/daysur_over.png"></li>`;
                }).join('');
                return content; 
            }
        }
        new SaleGoods({
            ele:'.fengqiang_rb ul'
        })
        function Tab(opt){      
            this.opt = opt;
            this.init();  
        }
        Tab.prototype = {
            constructor:Tab,
            init(){
                let opt = this.opt;
                let ele = opt.ele;
                $('<ul></ul>').html(opt.text.map(function(item){
                    return `<li><a href="#"><span>${item}</span></a></li>`;
                }).join('')).appendTo($(ele));
                $('<div />').addClass('tabcontent').appendTo($(ele).children('ul').children('li'));
                $(ele).find('ul').addClass('tab clearfix');
                $('.tab').find('li').eq(0).addClass('tabactive');

                $('.tab').children('li').on('mouseover',function(){
                    $('.tab').find('li').eq(0).removeClass('tabactive'); 
                    $(this).addClass('tabactive'); 
                                                
                });
                $('.tab').children('li').on('mouseover',()=>{
                    
                    if($('.tab').find('.tabactive >a').children("span").text()==="进口猫粮"){
                        $('.tabcontent').html('');
                        $.get('../api/getimport.php',data=>{
                            $('<ul></ul>').addClass('content').appendTo('.tabcontent');
                            $('.content').html(this.renderimport(JSON.parse(data)));
                        })
                    }
                    if($('.tab').find('.tabactive >a').children("span").text()==="热门"){
                        $('.tabcontent').html('');
                        $.get('../api/gethotfood.php',data=>{
                            let d = JSON.parse(data);
                            $('<div />').addClass('content_t clearfix').appendTo('.tabcontent');
                            $('<div />').addClass('content_tl fl').appendTo('.content_t');
                            $('<img />').attr('src',d[0].imgurl).appendTo('.content_tl');
                            $('<p />').addClass('goodsname').html(`${d[0].name}<br />`).appendTo('.content_tl');
                            $('<span>').text(d[0].description).appendTo('.goodsname');

                            $('<div / >').addClass('content_tr fr').appendTo('.content_t');
                            $('<div/>').addClass('content_trt').appendTo('.content_tr');
                            $('<img />').attr('src',d[1].imgurl).appendTo('.content_trt');
                            $('<p />').addClass('goodsname').html(`${d[1].name}<br />`).appendTo('.content_trt');
                            $('<span>').text(d[1].description).appendTo('.content_trt .goodsname');

                            $('<div/>').addClass('content_trb').appendTo('.content_tr');
                            $('<img />').attr('src',d[2].imgurl).appendTo('.content_trb');
                            $('<p />').addClass('goodsname').html(`${d[2].name}<br />`).appendTo('.content_trb');
                            $('<span>').text(d[2].description).appendTo('.content_trb .goodsname');

                            $('<div />').addClass('content_b').appendTo('.tabcontent');
                            $('<ul></ul>').addClass('clearfix').appendTo('.content_b');
                            $('.content_b ul').html(this.renderhot(d));
                            
                        })
                }
 
                });
                $('.tab').children('li').on('mouseout',function(){
                    $('.tab').find('li').eq(0).removeClass('tabactive');
                    $(this).removeClass('tabactive');
                });
                if($('.tab').find('.tabactive >a').children("span").text()==="热门"){
                        $('.tabcontent').html('');
                        $.get('../api/gethotfood.php',data=>{
                            let d = JSON.parse(data);
                            $('<div />').addClass('content_t clearfix').appendTo('.tabcontent');
                            $('<div />').addClass('content_tl fl').appendTo('.content_t');
                            $('<img />').attr('src',d[0].imgurl).appendTo('.content_tl');
                            $('<p />').addClass('goodsname').html(`${d[0].name}<br />`).appendTo('.content_tl');
                            $('<span>').text(d[0].description).appendTo('.goodsname');

                            $('<div / >').addClass('content_tr fr').appendTo('.content_t');
                            $('<div/>').addClass('content_trt').appendTo('.content_tr');
                            $('<img />').attr('src',d[1].imgurl).appendTo('.content_trt');
                            $('<p />').addClass('goodsname').html(`${d[1].name}<br />`).appendTo('.content_trt');
                            $('<span>').text(d[1].description).appendTo('.content_trt .goodsname');

                            $('<div/>').addClass('content_trb').appendTo('.content_tr');
                            $('<img />').attr('src',d[2].imgurl).appendTo('.content_trb');
                            $('<p />').addClass('goodsname').html(`${d[2].name}<br />`).appendTo('.content_trb');
                            $('<span>').text(d[2].description).appendTo('.content_trb .goodsname');

                            $('<div />').addClass('content_b').appendTo('.tabcontent');
                            $('<ul></ul>').addClass('clearfix').appendTo('.content_b');
                            $('.content_b ul').html(this.renderhot(d));
                            
                        })
                }
                

            },
            renderhot(d){
                let content = "";
                for(let i=3;i<d.length;i++){
                    content += `<li><a href="#"><img src="${d[i].imgurl}"><p class="content_bgoods">${d[i].name}<br /><span>${d[i].description}</span></a></li>`
                }
                return content;
            },
            renderimport(data){
                let content = '';
                content += data.map(function(item){
                    return `<li><a href="#"><img src="../${item.imgurl}"><p>${item.name}</p><span>￥${item.price}</span></a></li>`
                }).join('');
                return content;
            }

            
        }
        new Tab({
            ele:'.tab_zhuliang',
            text:["热门","进口猫粮","国产猫粮","处方猫粮"],
        })
        
        
        
        
       
        
       
    });
});