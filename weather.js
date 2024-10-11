var weather = ["Winter", "Cloudy", "Summer", "Spring", "Autumn", "Strom"]
var userInput = prompt (`"Enter Anyone Season You Like"\n Winter \r Cloudy \r Summer \r Spring \r Autumn \r Strom`)
var flag = false;



//  /////  Summer
for ( var i= 0; i < weather.length; i++){
    if (userInput === "Summer"){
      flag = true
      document.write(`
        <div class="card" style="width: 20rem; height: 400px; border: 2px solid salmon;
   border-radius: 10px;
   font-weight: bold;
   font-style: oblique;
   text-align: center;
   margin: auto;
   margin-top:2em;">
       <img src="./assets/7a799b21949644c151c252dc6ebaaccc (2).gif" alt="" style="width: 20rem; height: 200px">
       <div class="card-body">
           <div class="title"><h2>SUMMER</h2></div>
         <p class="card-text">
           When the days get longer, the stars shine brighter, 
           your hair get lighter, the water gets warmer, the music gets louder and life gets better
         </p>
       </div>
     </div>
`)
break;
    }




// // winter

  if (userInput === "Winter"){
    flag = true
    document.write(`
      <div class="card" style="width: 20rem; height: 400px; border: 2px solid salmon;
 border-radius: 10px;
 font-weight: bold;
 font-style: oblique;
 text-align: center;
 margin: auto;
 margin-top:2em;">
     <img src="./assets/16138c70a66483a73592eda33188277c.gif" alt="" style="width: 20rem; height: 200px">
     <div class="card-body">
<div class="title"><h2>Winter</h2></div>
         <div class="card-para">
<p>Winter is a season of recovery and preparation. </p>
        </div>
       
     </div>
   </div>
`)
break;
  }


//  /// spring


if (userInput === "Spring"){
  flag = true
  document.write(`
    <div class="card" style="width: 20rem; height: 400px; border: 2px solid salmon;
border-radius: 10px;
font-weight: bold;
font-style: oblique;
text-align: center;
margin: auto;
margin-top:2em;">
   <img src="./assets/a022279260dc2abb48e9f4bab9c21e80 (3).gif" alt="" style="width: 20rem; height: 200px">
   <div class="card-body">
       <div class="title"><h2>Spring</h2></div>
     <p class="card-text">
      Spring is a reminder that even after the coldest winters,
    <span style="background-color: pink;"> new beginnings</span> and <span style="background-color: pink;">fresh opportunities </span>await. Embrace the
     <span style="background-color: pink;">warmth of the sun</span> and let your spirit soar.
     
     </p>
   </div>
 </div>
`)
break;
}

//  ///// Rainy
if (userInput === "Rainy"){
  flag = true
  document.write(`
    <div class="card" style="width: 20rem; height: 400px; border: 2px solid salmon;
border-radius: 10px;
font-weight: bold;
font-style: oblique;
text-align: center;
margin: auto;
margin-top:2em;">
   <img src="./assets/2f06a32822a19645244123a0ab087667.gif" alt="" style="width: 20rem; height: 200px">
   <div class="card-body">
       <div class="title"><h2>Rainy</h2></div>
     <p class="card-text">
     The richness of the rain made me feel safe and protected; I have always considered the rain to be healing-a blanket- the comfort of a friend.
     </p>
   </div>
 </div>
`)
break;
}

//  ///  Cloudy
if (userInput === "Cloudy"){
  flag = true
  document.write(`
    <div class="card" style="width: 20rem; height: 400px; border: 2px solid salmon;
border-radius: 10px;
font-weight: bold;
font-style: oblique;
text-align: center;
margin: auto;
margin-top:2em;">
   <img src="./assets/4f7a8f3341ce13382d39785587e8bd92.gif" alt="" style="width: 20rem; height: 200px">
   <div class="card-body">
       <div class="title"><h2>Cloudy</h2></div>
     <p class="card-text">
     When there are clouds whether in the sky or in your life, it is an opportunity to use your imagination to create something spectacular.

     </p>
   </div>
 </div>
`)
break;
}

//  ///// strom
if (userInput === "Strom"){
  flag = true
  document.write(`
    <div class="card" style="width: 20rem; height: 400px; border: 2px solid salmon;
border-radius: 10px;
font-weight: bold;
font-style: oblique;
text-align: center;
margin: auto;
margin-top:2em;">
   <img src="./assets/8173b372fa6646b14f48d64d9ca2d8c7.gif" alt="" style="width: 20rem; height: 200px">
   <div class="card-body">
       <div class="title"><h2>Strom</h2></div>
     <p class="card-text">
       Not all storms come to disrupt your life. Some come to clear your path.
     </p>
   </div>
 </div>
`)
break;
}

// /// Autumn

if (userInput === "Autumn"){
  flag = true
  document.write(`
    <div class="card" style="width: 20rem; height: 400px; border: 2px solid salmon;
border-radius: 10px;
font-weight: bold;
font-style: oblique;
text-align: center;
margin: auto;
margin-top:2em;">
   <img src="./assets/Tumblr.gif" alt="" style="width: 20rem; height: 200px">
   <div class="card-body">
       <div class="title"><h2>Autumn</h2></div>
     <p class="card-text">
      Autumn shows us how beautiful it is to let things go
     </p>
   </div>
 </div>
`)
break;
}




}



if (flag= false){
  document.write(`
    <div class="card" style="width: 18rem; 
font-weight: bold;
font-style: oblique;
text-align: center;
background-color: blue">
   <img src="./assets/giphy.gif" alt="" style="width: 20rem; height: 200px">
   <div class="card-body">
       <div class="title"><h2>SUMMER</h2></div>
     <p class="card-text">
       When the days get longer, the stars shine brighter, 
       your hair get lighter, the water gets warmer, the music gets louder and life gets better
     </p>
   </div>
 </div>
    `)
  }