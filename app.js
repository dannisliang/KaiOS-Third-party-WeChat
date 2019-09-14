window.addEventListener("load", function() {
  console.log("Hello World!");
});

$(document).ready(function(){

  uuid='' 
  regx = /window.QRLogin.uuid = "(\S+?)"/
  window.QRLogin={}
  $.ajax({
	async:false,
	type:"post",
	dataType:"script",
  	url:"https://login.weixin.qq.com/jslogin",
	//url:"https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxnewloginpage",
	contentType: "text/javascript, text/html",
	//userAgent:"Mozilla/5.0 AppleWebKit/537.36 Chrome/76.0.3809.132 Safari/537.36",
	data:{
		"appid":"wx782c26e4c19acffb",
		"fun":"new",
		"lang":"zh_CN",
		"_":new Date().getTime()
	},
	complete:function(res){
		console.log(res.status)
	},
	success:function(){
		console.log("success")
		console.log(window.QRLogin.uuid)
		uuid = window.QRLogin.uuid	
		console.log(uuid)
		//pm = regx.test(res)
		//$("p").text(res.text())
		$("img").attr('src','https://login.weixin.qq.com/qrcode/' + self.uuid)
		
		/*while(true){
			$.ajax({
			data:{
				"tip":'1',
				"uuid":uuid,
				"_":new Date().getTime()
			},
			url:"https://login.weixin.qq.com/cgi-bin/mmwebwx-bin/login",
			success:function(res){
				console.log(res)
			}
			})
		}*/
	},
	error:function(res){
		console.log("error")
		console.log(res)
	}
  })
  var play = null
        function autoplay() {
            play = setInterval(function () {
			console.log("hhh")
			$.ajax({
			data:{
				"tip":'1',
				"uuid":uuid,
				"_":new Date().getTime()
			},
			dataType:"script",
			url:"https://login.weixin.qq.com/cgi-bin/mmwebwx-bin/login",
			success:function(res){
				console.log(window.code)
				if (window.code == 200){
					console.log(window.redirect_uri)
					clearInterval(play)
				}
			},
			error:function(res){
				console.log(res)
			}
			})
	
	
            }, 1000);
        }
        autoplay();
  
});


  
