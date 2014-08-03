$( document ).ready(function() {
			//$('#sform').validate();
			$('#read1').addClass('animated rotateInDownLeft');
			$('#read2').addClass('animated rotateInDownRight');

			$('#write1').addClass('animated rotateInUpLeft');
			$('#write2').addClass('animated rotateInUpRight');

			$('.heading').addClass('animated rotateInDownLeft');
			$('.heading_shadow').addClass('animated rotateInDownLeft');
			$('.quote').addClass('animated rotateInDownRight');
			$('.quote2').addClass('animated rotateInDownRight');

			/*$('#uname').bind('blur',function(event){
				//$('#login_error').text('error');
			});*/
			/*$('#sform').submit(function(){
				$('#login_error').text('error');
			});*/
			$('#button_sub').bind('click',function(){
				//$('#sform').validate();
				//alert();
				//document.submit();
				
				var uname = $('#sform').find('input[name="uname"]').val();
				var pwd = $('#sform').find('input[name="pwd"]').val();

				if(!uname||!pwd) //document.submit();
				{
					$('#login_error').text('testing the validation.... are we?');
				}
				else
				{
					$('#login_error').text('');
					//alert("all ok");
					$('#sform').submit();
				}
			});

});
/*
function submited()
{
	var uname = document.getElementById("uname").value;
	var pwd = document.getElementById("pwd").value;
	//alert(uname+" "+pwd);
	if(!uname)
	{
		$('#login_error').text('error');
	}
	//document.submit();
}
*/
