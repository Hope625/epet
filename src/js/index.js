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
                    bannerBgColor:[]
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
                this.ele = ele;
                this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
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
                ele.on('click',e=>{
                    if(e.target.parentNode.className === 'page'){
                        opt.index = $(e.target).text()-1;
                        this.play();
                        this.changeBgcolor();
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
                    opt.index = 0;
                }
                else if(opt.index<0){
                    opt.index = opt.len - 1;
                }
                let obj= {};
                if(opt.type === 'horizontal'){
                    obj.left = -opt.index * opt.width;
                    animate($(this.ele).children('ul').get(),obj);
                }else if(opt.type === 'vertical'){
                    obj.top = -opt.index*opt.height;
                    animate($(this.ele).children('ul').get(),obj);
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
                })
                
                $('#nav').css({
                    'border-color':opt.bannerBgColor[opt.index]
                })
                // $('.nav_l >ul >li >a').css({
                //     "background-color":"#fff",
                //     "border-color":"#fff",
                //     "height":"35px",
                //     "color":"#000"
                // })
                $('.nav_l >ul >li .navactive').css({
                    "background-color":opt.bannerBgColor[opt.index],
                    "border-color":opt.bannerBgColor[opt.index],
                    "height":"36px"
                })
                
            }
            
        }
        new Carousel({
            ele:'.banner',
            len:7,
            bannerBgColor:["#FFDDE1","#22277B","#FAABC1","#D44E35","#8BCEE8","#2793CE","#F46642"]
        });
        
       
    });
});