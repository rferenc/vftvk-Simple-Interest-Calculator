function compute()
{

    var principal = parseInt(document.getElementById("principal").value);

    // validate input number
    if ( principal <= 0 ) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    //calculation
    else {
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
        var interest = principal * years * rate / 100;
        var yearcurrent = new Date().getFullYear();
        var yearfuture = yearcurrent + years;
    
        //prepare respone text
        var text = "If you deposit <mark>"+principal+"</mark>, <br> at an interest rate of <mark>"+rate+"%</mark>. <br> You will receive an amount of <mark>"+interest+"</mark>, <br> in the year <mark>" + yearfuture +"</mark>";
        document.getElementById("result").innerHTML=text;
    
    }


}
       
//update rate display
function update()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("ratetext").innerHTML=rate + "%"
}
