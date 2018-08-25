require(['config'],function(){
    require(['jquery','html_common','common'],function($){
        let Form = function(opt){
            console.log(opt);
            this.ele = opt.ele,
            this.init = function(){
                if(this.ele==='#phone'){
                    $(document).ready(function(){
                        $(this.ele).focus();
                    });
                    $(this.ele).on('blur',()=>{ 
                        this.checkphone($(this.ele).val());
                    });                   
                }
                $(this.ele).on('focus',function(){
                    $(this).closest('.form-group').find('p').css({'visibility':'hidden'});
                    $(this.ele).closest('.form-group').children('i').css({'display':'none'});
                });
                if(this.ele==='#vcode'){

                }
            },
            this.checkphone = function(phone){
                if(phone.length<11||!/^1[3-9]\d{9}$/.test(phone)){
                    console.log(phone);
                    $('#phone').closest('.form-group').find('p').text('请输入11位手机号').css({'visibility':'visible'});
                }else{
                    $('#phone').closest('.form-group').find('p').css({'visibility':'hidden'});                  
                    $.get('../api/checkphone.php',{phone:`${phone}`},res=>{
                        console.log(res);
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
                
            }
        }

        let form = new Form({
            ele:"#phone"
        });
        form.init();
    })
}) 