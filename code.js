const birthday = new Date("2008-12-19");
const now = new Date(); 
var rng = new RNG(now.getTime() + birthday.getTime());
const submit = document.getElementById("submit");
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () { // We need to wrap the loop into an async function for this to work
  for (var i = 1; i <= 4; i++) {
    $("#spin"+(i)).hide();
    $("#S"+(i)).fadeIn();
    await timer(936); // then the created Promise can be awaited
  }
}
submit.onclick = function() 
{
    $("#S1").hide();
    $("#S2").hide();
    $("#S3").hide();
    $("#S4").hide();  
    $("#spin1").fadeIn();
    $("#spin2").fadeIn();
    $("#spin3").fadeIn();
    $("#spin4").fadeIn();
    let array = [1, 2, 3, 4];
    for (let i = 3; i > 1; i--) {
        let j = rng.random(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    let i = rng.random(0, 3)
    if (i == 3)
    {
        let j = rng.random(0, 3);
        [array[0], array[j]] = [array[j], array[0]];
    }
    for (let i = 0; i < 4; i++)
    {
        let n = array[i];
        document.getElementById("S"+(i+1)).innerHTML=document.getElementById("nameS"+n).value;
    }
    setTimeout(function(){ 
      load();
    }, rng.random(1500,3000));
}