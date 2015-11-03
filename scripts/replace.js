function replace()
{
	//set model
	var str = $('#defaultController').val();
	var strController = $('#defaultValue').val();

    str = str.toLowerCase();
    
    var n = str.indexOf("_");
    while(n > 0)
    {
       str = str.substring(0, n + 1) + str[n+1].toUpperCase() + str.substring(n+2, str.length);
       str = str.replace("_", "");
       n = str.indexOf("_"); 
    }

    str = str.replace("_", "");
	$('#defaultValue').val(str);
	$('#defaultValue').select();
}
