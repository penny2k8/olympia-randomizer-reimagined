const birthday = new Date("2008-12-19");
const now = new Date(); 
var rng = new RNG(now.getTime() + birthday.getTime());
const submit = document.getElementById("submit");
const edit = document.getElementById("edit");
const timer = ms => new Promise(res => setTimeout(res, ms));
var count;
const b4 = document.getElementById("btn4p");

if (document.querySelector('input[name="select"]')) {
  document.querySelectorAll('input[name="select"]').forEach((elem) => {
    elem.addEventListener("change", function(live) {
      count = live.target.value;
      //console.log(count);
      if (count == 4)
      {
        $("#c5").hide();
        $("#nameS5").hide();
      }
      else
      {
        $("#c5").show();
        $("#nameS5").show();
      }
    });
  });
}

async function load (count) {
  for (var i = 1; i<=count; i++) {
    $("#spin"+(i)).hide();
    $("#S"+(i)).fadeIn();
    await timer(936);
  }
  submit.disabled = false;
  edit.disabled = false;
}

submit.onclick = function() 
{
    if (b4.checked == true)
    {
      count = 4;
    }
    else
    {
      count = 5;
    }
    //console.log(count);
    for (let i = 0; i < 5; i++)
    {
        document.getElementById("S"+(i+1)).innerHTML=' ';
    }
    $("#S1").hide();
    $("#S2").hide();
    $("#S3").hide();
    $("#S4").hide();  
    $("#spin1").fadeIn();
    $("#spin2").fadeIn();
    $("#spin3").fadeIn();
    $("#spin4").fadeIn();
    if(count == 5)
    {
      $("#S5").hide();
      $("#spin5").fadeIn();
    }
    submit.disabled = true;
    edit.disabled = true;

    const order = new Set([]);
    while(order.size < count-1)
    {
      let n = rng.random(1,360);
      if (n%count==0)
      {
        n = count;
      }
      else
      {
        n = n%count;
      }
      //console.log(n);
      order.add(n);
    }
    for(let i = 1; i<=count; i++)
    {
      order.add(i);
    }
    let arr = Array.from(order);
    for (let i = 0; i < count; i++)
    {
        let n = arr[i];
        //console.log("S"+arr[i]);
        document.getElementById("S"+(i+1)).innerHTML=document.getElementById("nameS"+n).value;
    }
    setTimeout(function(){ 
      load(count);
    }, rng.random(1500,3000));
}