const birthday = new Date("2008-12-19");
const now = new Date(); 
var rng = new RNG(now.getTime() + birthday.getTime());
const submit = document.getElementById("submit");
const edit = document.getElementById("edit");
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () {
  for (var i = 1; i <= 4; i++) {
    $("#spin"+(i)).hide();
    $("#S"+(i)).fadeIn();
    await timer(936);
  }
  submit.disabled = false;
  edit.disabled = false;
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
    submit.disabled = true;
    edit.disabled = true;

    const order = new Set([]);
    while(order.size < 3)
    {
      let n = rng.random(1,936);
      if (n%4==0)
      {
        n = 4;
      }
      else
      {
        n = n%4;
      }
      //console.log(n);
      order.add(n);
    }
    for(let i = 1; i<=4; i++)
    {
      order.add(i);
    }
    let arr = Array.from(order);
    for (let i = 0; i < 4; i++)
    {
        let n = arr[i];
        //console.log("S"+arr[i]);
        document.getElementById("S"+(i+1)).innerHTML=document.getElementById("nameS"+n).value;
    }
    setTimeout(function(){ 
      load();
    }, rng.random(1500,3000));
}