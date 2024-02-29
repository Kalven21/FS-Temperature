// Enter stuudent information (name, grade101, grade 102) and alculate and display the GPA

function getGPA(){
    let studentName = prompt("Enter your name");
    let grade101 = Number(prompt("Enter your grade 101"));
    let grade102 = Number(prompt("Enter your grade 102"));
    
    let gpa = (grade101 + grade102)/2;
    
    document.getElementById("grades").innerHTML+=`<div>
            <p>${studentName}</p>
            <p>${gpa}</p>
        </div>`;
    
}

// Create a function where the user enters a product name, price and the quantiy
//and display the products on the HTML (use a button to trigger the function)
let total=0;

function getProduct(){

    let productName = prompt("'Enter the product name");
    let price = Number(prompt("Enter the price"));
    let quantity = Number(prompt("Enter the quantity"));
    let subtotal = price*quantity;

    total += subtotal;
    document.getElementById("productList").innerHTML+=`
    <li>${productName} - ${subtotal.toFixed(2)}</li>
    `;
    document.getElementById("total").innerHTML=total.toFixed(2);
}