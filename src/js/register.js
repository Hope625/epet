require(['config'],function(){
    require(['jquery','html_common','common'],function($){
        let Form = function(opt){
            this.ele = opt.ele,
   
            this.init = function(){
                let str = '1234567890abcdefghijklmnopqrstuvwxyz'.split('');
                $(document).ready(function(){
                    $("#phone").focus();
                    for(let i=0;i<$('.yzcode').find('span').length;i++){
                            let pd_left = randomNumber(4,15);
                            let letter_width = randomNumber(14,20);
                            let tr_rota = randomNumber(-30,30);
                        $(".yzcode").find('span').eq(i).css({
                            "padding-left": pd_left+"px",
                            "width":letter_width + 'px',
                            "transform":`rotate(${tr_rota}deg)`,
                        }).text(`${str[randomNumber(0,35)].toUpperCase()}`);
                        $(".letter").css({
                            "background":randomColor(16)
                        })
                    }
                    
                });
                if(this.ele==='#phone'){
                    $(this.ele).on('blur',()=>{ 
                        this.checkphone($(this.ele).val());
                    });                   
                }
                $(this.ele).on('focus',function(){
                    $(this).closest('.form-group').find('p').css({'visibility':'hidden'});
                    $(this.ele).closest('.form-group').children('i').css({'display':'none'});
                });
                if(this.ele==='#vcode'){
                    $(this.ele).on('blur',()=>{
                        if($(this.ele).val()===""){
                            $(this.ele).closest('.form-group').
                            children('p').text('请输入验证码').css('visibility','visible');
                        }
                        else if($(this.ele).val().toUpperCase()===$(".yzcode").find('.letter').text()||$(this.ele).val().toLowerCase()===$(".yzcode").find('.letter').text()){
                            $(this.ele).closest('.form-group').
                            children('i').css('display','block');
                        }
                        else{
                            $(this.ele).closest('.form-group').children('p').text('验证码输入错误').css('visibility','visible');
                            $(this.ele).closest('.form-group').children('i').css('display','none');
                        }
                    });
                    $('.btnRandom').on('click',function(){
                        for(let i=0;i<$('.yzcode').find('span').length;i++){
                            let pd_left = randomNumber(4,15);
                            let letter_width = randomNumber(14,20);
                            let tr_rota = randomNumber(-30,30);
                            $(".yzcode").find('span').eq(i).css({
                                "padding-left": pd_left+"px",
                                "width":letter_width + 'px',
                                "transform":`rotate(${tr_rota}deg)`
                            }).text(`${str[randomNumber(0,35)].toUpperCase()}`);
                            $(".letter").css({
                                "background":randomColor(16)
                            })
                        }
                    })                    
                }
                if(this.ele==='#shortmsg'){
                    $(this.ele).on('blur',()=>{
                        if($(this.ele).val().length!=6){
                            $(this.ele).closest('.form-group').find('p').text('请输入短信验证码').css({'visibility':'visible'});
                            $(this.ele).closest('.form-group').find('i').css({'display':'none'});
                        }else{
                            $(this.ele).closest('.form-group').find('i').css({'display':'block'});
                        }
                        
                    })
                }
                if(this.ele==='#username'){
                    $(this.ele).on('blur',()=>{
                        this.checkusername($(this.ele).val());
                    });
                }
                if(this.ele==='#password'){
                    $(this.ele).on('blur',()=>{
                        if(!/^\S{8,20}$/.test($(this.ele).val())){
                            $(this.ele).closest('.form-group').children('p').text('密码输入有误').css({'visibility':'visible'});
                            $(this.ele).closest('.form-group').children('i').css({'display':'none'});
                        }else{
                            $(this.ele).closest('.form-group').children('i').css({'display':'block'});
                        }
                    });
                    $(this.ele).on('keyup' ,()=>{
                        let str = $(this.ele).val().toUpperCase();
                        let hasNumber = false;
                        let hasChar = false;
                        let hasSign = false;
                        for(let i=0; i<str.length; i++){
                            if(str.charCodeAt(i)>=48 &&  str.charCodeAt(i)<=57){
                                hasNumber = true;
                                continue;
                            }
                            if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
                                hasChar = true;
                                continue;
                            }
                            if( !(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57) && !(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)){
                                hasSign = true;
                                continue;
                            }
                        }
                        
                        if(hasSign) {
                            //强
                            $('.pwd_level').children('li').eq(0).css({
                                "background-color":"red"
                            })
                            $('.pwd_level').children('li').eq(1).css({
                                "background-color":"orange"
                            })
                            $('.pwd_level').children('li').eq(2).css({
                                "background-color":"green"
                            })
                            
                        } else if(hasChar && hasNumber) {
                            //中
                            $('.pwd_level').children('li').eq(0).css({
                                "background-color":"red"
                            })
                            $('.pwd_level').children('li').eq(1).css({
                                "background-color":"orange"
                            })
                            $('.pwd_level').children('li').eq(2).css({
                                "background-color":"#eee"
                            })
                        } else {
                            //弱
                            $('.pwd_level').children('li').eq(0).css({
                                "background-color":"red"
                            })
                            $('.pwd_level').children('li').eq(1).css({
                                "background-color":"#eee"
                            })
                            $('.pwd_level').children('li').eq(2).css({
                                "background-color":"#eee"
                            })  
                        }
                    })
                    
                }
                if(this.ele==='#checkpsw'){
                    $(this.ele).on('blur',()=>{
                        if($(this.ele).val()!=''){
                            if($(this.ele).val()===$("#password").val()){
                                $(this.ele).closest('.form-group').children('i').css({'display':'block'});
                            }else{
                                $(this.ele).closest('.form-group').children('p').text('密码不一致').css({'visibility':'visible'});
                                $(this.ele).closest('.form-group').children('i').css({'display':'none'});
                            }
                        }
                    })   
                    
                }
                if(this.ele==='.addmitrule'){
                    $('.addmitrule').on('click',()=>{
                        $('.addmitrule').children('input').prop('checked',!this.checked);
                        if($('.addmitrule').children('input').prop('checked')===true){
                            for(let i=0;i<$(".form-group").children('p').length;i++){
                                if($('.form-group').children('p').css('visibility')==='visible'){
                                    $('.btn_reg').css({"background":"#eee"});
                                    return false;
                                }                             
                            }    
                        }
                        else{
                            return false;
                        }     
                    });
                    $('.btn_reg').css({"background":"#58bc58"});  
                        $('.btn_reg').on('click',()=>{
                            this.addUser();
                    })
                }   
            },
            this.checkphone = function(phone){
                if(phone.length<11||!/^1[3-9]\d{9}$/.test(phone)){
                    $('#phone').closest('.form-group').find('p').text('请输入11位手机号').css({'visibility':'visible'});
                }else{
                    $('#phone').closest('.form-group').find('p').css({'visibility':'hidden'});                  
                    $.get('../api/checkphone.php',{phone:`${phone}`},res=>{
                        if(res==='no'){
                            $(this.ele).closest('.form-group').find('p').html(`该手机号已存在，<a href= "login.html">登录</a>`).css({'visibility':'visible',"color":"#000"});
                            $(this.ele).closest('.form-group').children('i').css({'display':'none'});
                        }
                        else{
                            $(this.ele).closest('.form-group').find('p').text("正在效验...").css({'visibility':'visible'});
                            setTimeout(()=>{
                                $(this.ele).closest('.form-group').find('p').css({'visibility':'hidden'});
                                $(this.ele).closest('.form-group').children('i').css({'display':'block'});
                            }, 500)

                        }
                    })
                }
                
            },
            this.checkusername = function(username){
                if(username!=''){
                    if(!/^[a-z][\w\-]{4,19}$/.test(username)){
                        $('#username').closest('.form-group').children('p').text('用户名输入有误').css({'visibility':'visible'});
                    }
                    else{
                        $('#username').closest('.form-group').children('p').css({'visibility':'hidden'});
                        $.get('../api/checkusername.php',{username:`${username}`},res=>{
                            if(res==='no'){
                                $(this.ele).closest('.form-group').find('p').html(`用户名已存在，<a href= "login.html">登录</a>`).css({'visibility':'visible',"color":"#000"});
                                $(this.ele).closest('.form-group').children('i').css({'display':'none'});
                               
                            }else{
                                $(this.ele).closest('.form-group').find('p').text("正在效验...").css({'visibility':'visible'});
                                setTimeout(()=>{
                                    $(this.ele).closest('.form-group').find('p').css({'visibility':'hidden'});
                                    $(this.ele).closest('.form-group').find('i').css({'display':'block'});
                                }, 500);

                            }
                        }) 
                    }
                }    
                else{
                    $('#username').closest('.form-group').children('p').text('请输入用户名').css({'visibility':'visible'});
                }
                
            },
            this.addUser = function(){
                console.log($('#phone').val(),$('#username').val(),$("#password").val());
                $.post('../api/addUser.php', 
                    {
                        phone:$('#phone').val(),
                        username:$('#username').val(),
                        password:$("#password").val()
                    },
                    function(res){
                        if(res==='yes'){
                            location.href = 'login.html';
                        }
                    }
                );
            }
        }

        let phone = new Form({
            ele:"#phone"
        });
        phone.init();
        let vcode = new Form({
            ele:"#vcode"
        });
        vcode.init();
        let msgcode = new Form({
            ele:"#shortmsg"
        });
        msgcode.init();
        let username = new Form({
            ele:"#username"
        });
        username.init();
        let password = new Form({
            ele:'#password'
        });
        password.init();
        let checkpsw = new Form({
            ele:"#checkpsw"
        });
        checkpsw.init();
        let addmitrule = new Form({
            ele:".addmitrule"
        });
        addmitrule.init();
    })
}) 