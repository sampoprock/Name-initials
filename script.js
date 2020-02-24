var i,j,k;

for(i=0;i<=11;i++)
{
	for(j=1;j<=8;j++)
	{
		if(i>=0 && i<2 || i>4 && i<7 || i>=2 && i<=4 && j==1 || i>=7 && i<=9 && j==8 || i>9 && i<=11 )
		{
			document.write("**");
		}	
		else
		{
			document.write("  ");
		}
	}

	document.write("<br>");
}
document.write("<br> <br>")

for(i=0;i<=11;i++)
{
	for(j=0;j<=2;j++)
	{
		document.write("*");
	}
	for(k=1;k<5;k++)
	{
		if(i>=0 && i<2 || i>9 && i<=11)
		{
			document.write("**");
		}
		else
		{
			document.write("  ");
		}
	}
	document.write("<br>");
}

