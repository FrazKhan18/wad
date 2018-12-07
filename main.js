var AccountData=
    {
        title : "Fraz Khan",
        balance : 18768,
        currency : "PKR",
        IBAN :  "MFK1897"
    };
function display()
{
    document.getElementById("title").innerHTML=AccountData.title;
    document.getElementById("balance").innerHTML=AccountData.balance;
    document.getElementById("currency").innerHTML=AccountData.currency;
    document.getElementById("IBAN").innerHTML=AccountData.IBAN;
}
display();

function displaydata(event)
{
    var a= document.getElementById("deposit");
}
