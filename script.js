

function stringChop(str, size) {
	if(str.length==0)
	{
		return [];
	}
  let temp="";
	let ans=[];
	for(let i=0;i<str.length;i++)
		{
			let ch=str.charAt(i);
			temp+=ch;
			if(temp.length==size)
			{
				ans.push(temp);
				temp="";
			}
		}
	if(temp.length>0)
	{
		ans.push(temp);
	}
	return ans;
}   

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));



