function localStorageSupported() 
{
	if ('localStorage' in window && window['localStorage'] !== null) 
	{
		return true;
	} 
	else
	{
		return false;
	} 	

}

function saveItem() 
{
	var priority = document.forms.tlform.priority.value;
	var data = document.forms.tlform.data.value;

	localStorage.setItem(priority, data);
	showAll();
}


function modifyItem() 
{
	var priority = document.forms.tlform.priority.value;
	document.forms.tlform.data.value = localStorage.getItem(priority);
	showAll();
}

function removeItem() 
{
	var priority = document.forms.tlform.priority.value;
	document.forms.tlform.data.value = localStorage.removeItem(priority);
	showAll();
}

function clearAll() 
{
	localStorage.clear();
	showAll();
}

function showAll() 
{
	if (localStorageSupported()) 
	{
		var key = "";
		var list = "<tr><th>Name</th><th>Value</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) 
		{
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Name</th><th>Value</th></tr>\n") 
		{
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}
