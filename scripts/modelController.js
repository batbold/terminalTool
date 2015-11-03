function generate()
{
	//set model
	str = $('#defaultValueOrig').val();
	strController = $('#defaultControllerOrig').val();

	if($('.operation').val())
	{
		if(Number($('.operation').val()))
		{
			numb = Number($('.operation').val());			
			str = str.replace(/operationCreate/g, numb + 1);
			str = str.replace(/operationUpdate/g, numb + 2);
			str = str.replace(/operationDelete/g, numb + 3);
			str = str.replace(/operationRead/g, numb + 4);
			$('#defaultValue').val(str);
		}
	}
	if($('.col-name').val())
	{
		str = str.replace(/ModelName/g, $('.col-name').val());
		$('#defaultValue').val(str);
	}

	//set controller
	//set model
	if($('.operation').val())
	{		
		strController = strController.replace(/operationList/g, $('.operation').val());
		$('#defaultController').val(strController);
	}
	if($('.col-name').val())
	{
		strController = strController.replace(/ControllerName/g, $('.col-name').val());
		$('#defaultController').val(strController);
	}
}
