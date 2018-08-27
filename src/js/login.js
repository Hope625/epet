require(['config'],function(){
    require(['jquery','html_common','common'],function($){
        let Login = function(){
            this.init = function(){
                $('.btn_login').on('click',()=>{
                    this.login();                   
                    // if(this.check){
                    //     let date = new Date();
                    //     // 在当前的基础上+7天
                    //     date.setDate(date.getDate()+7);

                    //     document.cookie = 'username=' + $('#username').val() + ';expires=' + date.toUTCString();
                    //     document.cookie = 'password=' + $('#paasword').val() + ';expires=' + date.toUTCString();

                    //     let cookies = document.cookie;
                    //     cookies = cookies.split('; ');

                    //     // 循环找出想要的cookie
                    //     cookies.forEach(function(item){
                    //         let arr = item.split('=');

                    //         if(arr[0] === 'username'){
                    //             currentUser = arr[1];
                    //         }else if(arr[0] === 'password'){
                    //             currentPassword = arr[1];
                    //         }
                    //     });
                        
                    //     this.login({
                    //         username:currentUser,
                    //         password:currentPassword
                    //     });
                    // } 
                })
                
            },
            this.login = function(){
                $.post('../api/login.php',{
                    username:$('#username').val(),
                    password:$('#password').val()
                },
                res=>{
                    if(res==="no"){
                        alert('您输入的用户名或密码有误');
                    }
                    else if(res==="yes"){
                        // document.cookie = 'username=' + $('#username').val() + ';expires=' + date.toUTCString();
                       location.href = '../index.html';
                    }

                });
            }
        }
        let userlogin =  new Login(
        );
        userlogin.init();
    })
})