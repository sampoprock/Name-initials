var row,column;

for(row=0;row<7;row++)
{
	for(column=0;column<5;column++)
	{
		if(((row==0 || row==3 || row==6) && (column>0 && column<4)) || (column==0 && (row>0 && row<3)) || (column==4 &&(row>3 && row<6)))
		{
			document.write("*");
		}	
		else
		{
			document.write(" \xa0");
		}
	}
	document.write("<br>");
}
document.write("<br> <br>");

for(row=0;row<7;row++)
{
	for(column=0;column<5;column++)
	{
		if((column==0) || ((row==0 || row==6) && (column>0)))
		{
			document.write("*");
		}
		else
		{
			document.write(" \xa0");
		}
	}
	document.write("<br>");
}