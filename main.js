

//inputs
let X1=document.getElementById("x1");
let X2=document.getElementById("x2");
let X3=document.getElementById("x3"); 
let Y1=document.getElementById("y1"); 
let Y2=document.getElementById("y2"); 
let Y3=document.getElementById("y3"); 
let calculate=document.getElementById('calc')
let outpustpsin=document.getElementById('output')
//button
calculate.addEventListener("click",dist);

//function
function dist() {
  //
    let x1= +X1.value  
    let x2= +X2.value
    let x3= +X3.value
    let y1= +Y1.value
    let y2= +Y2.value
    let y3= +Y3.value

    
    //output
   outpustpsin.innerHTML=perimeterfinder(x1,x2,x3,y1,y2,y3);

}

function perimeterfinder(m1,m2,m3,n1,n2,n3) {
  let a=((m2-m1)+(n2-n1))
    
    let A=Math.sqrt(a**2);
    let b=((m3-m2)+(n3-n2));
    let B=Math.sqrt(b**2);
    let c=((m3-m1)+(n3-n1));
    let C=Math.sqrt(c**2);
    let AB=A*B;
    let BC=B*C;
    let AC=A*C;
    
    return (AB+BC+AC);
}