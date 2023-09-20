function loadEvents()
{
    random1 =  Math.floor(Math.random() * 10);
    random2 =  Math.floor(Math.random() * 10);
    random3 =  Math.floor(Math.random() * 10);
    random4 =  Math.floor(Math.random() * 10);
    random5 =  Math.floor(Math.random() * 10);

    console.log(random1);
    console.log(random2);
    console.log(random3);
    console.log(random4);
    console.log(random5);

    document.getElementById("butguess").addEventListener('click', num1);
    document.getElementById("butguess").addEventListener('click', num2);
    document.getElementById("butguess").addEventListener('click', num3);
    document.getElementById("butguess").addEventListener('click', num4);
    document.getElementById("butguess").addEventListener('click', num5);

    document.getElementById("butreset").addEventListener('click', reset);

    document.getElementById("div1").innerHTML="*";
    document.getElementById("div2").innerHTML="*";
    document.getElementById("div3").innerHTML="*";
    document.getElementById("div4").innerHTML="*";
    document.getElementById("div5").innerHTML="*";
}

function num1()
{
    numero1 = document.getElementById("num1").value;

    if ((numero1 <0) || (numero1 > 9))
    {
        document.getElementById("error1").innerHTML= "Casilla 1: Fuera de la franja, intentalo de nuevo"; 
    }
    else
    {
        document.getElementById ("error1").innerHTML= "";
    }

    if (numero1=="")
    {
        document.getElementById ("error2").innerHTML= "Casilla 1: vacia ";
    }
    else
    {
        document.getElementById ("error2").innerHTML= "";

            if (numero1 == random1)
        {
            document.getElementById("div1").innerHTML=random1; 
            document.getElementById("num1").disabled=true;
        }
        else
        {
            document.getElementById("div1").innerHTML="*";
        }
    }
}


function num2()
{
    numero2 = document.getElementById("num2").value;

    if ((numero2 <0) || (numero2 > 9))
    {
        document.getElementById("error3").innerHTML= "Casilla 2: Fuera de la franja, intentalo de nuevo"; 
    }
    else
    {
        document.getElementById ("error3").innerHTML= "";
    }

    if (numero2=="")
    {
        document.getElementById ("error4").innerHTML= " Casilla 2: vacia ";
    }
    else
    {
        document.getElementById ("error4").innerHTML= "";

        if (numero2 == random2)
        {
            document.getElementById("div2").innerHTML=random2; 
            document.getElementById("num2").disabled=true;
        }
        else
        {
            document.getElementById("div2").innerHTML="*";
        }
    }
}

function num3()
{
    numero3 = document.getElementById("num3").value;
    
    if ((numero3 <0) || (numero3 > 9))
    {
        document.getElementById("error5").innerHTML= "Casilla 3: Fuera de la franja, intentalo de nuevo"; 
    }
    else
    {
        document.getElementById ("error5").innerHTML= "";
    }

    if (numero3=="")
    {
        document.getElementById ("error6").innerHTML= " Casilla 3: vacia ";
    }
    else
    {
        document.getElementById ("error6").innerHTML= "";

        if (numero3 == random3)
    {
        document.getElementById("div3").innerHTML=random3; 
        document.getElementById("num3").disabled=true;
    }
    else
    {
        document.getElementById("div3").innerHTML="*";
    }
    }
}

function num4()
{
    numero4 = document.getElementById("num4").value;

    if ((numero4 <0) || (numero4 > 9))
    {
        document.getElementById("error7").innerHTML= "Casilla 4: Fuera de la franja, intentalo de nuevo"; 
    }
    else
    {
        document.getElementById ("error7").innerHTML= "";
    }

    if (numero4=="")
    {
        document.getElementById ("error8").innerHTML= " Casilla 4: vacia ";
    }
    else
    {
        document.getElementById ("error8").innerHTML= "";
        if (numero4 == random4)
        {
            document.getElementById("div4").innerHTML=random4; 
            document.getElementById("num4").disabled=true;
        }
        else
        {
            document.getElementById("div4").innerHTML="*";
        }
    }
}

function num5()
{
    numero5 = document.getElementById("num5").value;

    if ((numero5 <0) || (numero5 > 9))
    {
        document.getElementById("error9").innerHTML= "Casilla 5: Fuera de la franja, intentalo de nuevo"; 
    }
    else
    {
        document.getElementById ("error9").innerHTML= "";
    }

    if (numero5=="")
    {
        document.getElementById ("error10").innerHTML= " Casilla 5: vacia ";
    }
    else
    {
        document.getElementById ("error10").innerHTML= "";

        if (numero5 == random5)
        {
            document.getElementById("div5").innerHTML=random5; 
            document.getElementById("num5").disabled=true;
        }
        else
        {
            document.getElementById("div5").innerHTML="*";
        }

    }
    if (numero1 == random1 && numero2 == random2 && numero3 == random3 && numero4 == random4 && numero5 == random5)
    {
        document.getElementById ("congrat").innerHTML= "Felicidades!";
    }
}

function reset()
{
    random1 =  Math.floor(Math.random() * 10);
    random2 =  Math.floor(Math.random() * 10);
    random3 =  Math.floor(Math.random() * 10);
    random4 =  Math.floor(Math.random() * 10);
    random5 =  Math.floor(Math.random() * 10);

    console.log(random1);
    console.log(random2);
    console.log(random3);
    console.log(random4);
    console.log(random5);

    document.getElementById("div1").innerHTML="*";
    document.getElementById("num1").disabled=false;
    document.getElementById("num1").value=""; 

    document.getElementById("div2").innerHTML="*";
    document.getElementById("num2").disabled=false;
    document.getElementById("num2").value=""; 

    document.getElementById("div3").innerHTML="*";
    document.getElementById("num3").disabled=false;
    document.getElementById("num3").value=""; 

    document.getElementById("div4").innerHTML="*";
    document.getElementById("num4").disabled=false;
    document.getElementById("num4").value=""; 

    document.getElementById("div5").innerHTML="*";
    document.getElementById("num5").disabled=false;
    document.getElementById("num5").value=""; 

    document.getElementById("error1").innerHTML="";
    document.getElementById("error2").innerHTML="";
    document.getElementById("error3").innerHTML="";
    document.getElementById("error4").innerHTML="";
    document.getElementById("error5").innerHTML="";
    document.getElementById("error6").innerHTML="";
    document.getElementById("error7").innerHTML="";
    document.getElementById("error8").innerHTML="";
    document.getElementById("error9").innerHTML="";
    document.getElementById("error10").innerHTML="";

    document.getElementById("congrat").innerHTML="";
}


