function toCelToFa(){
    let Celcius = Number(prompt("Enter temperature in Celcius:"));
    let Fahrenheit = Number((Celcius * 9/5) + 32);
    document.getElementById("fahrenheit").innerHTML+=`
    <p>The conversation of Celsius ${Celcius} to Fahrenheit is ${Fahrenheit}</p>
    `
}