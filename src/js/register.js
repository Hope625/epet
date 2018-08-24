require(['config'],function(){
    require(['jquery','html_common','common'],function($){
        let Form = function(opt){
            this.phone = opt.phone,
            this.vcode = opt.vcode,
            this.msgcode = opt.msgcode,
            this.username = opt.username,
            this.pwd = opt.password,
            this.checkpsw = this.checkpsw,
            this.init = function(){
                $(document).ready(function(){
                    $("#phone").focus();
                });
                $('#phone').on('blur',function(){
                    if($(this).val()===''){
                        $(this).closest('.form-group').find('p').text('请输入11位手机号').css({'visibility':'visible'});
                    }
                })
            }
        }
        let form = new Form({});
        form.init();
    })
}) 