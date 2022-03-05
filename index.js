$(() => {

  let sF = 1 //scale factor

  canv.width = 700*sF;
  canv.height = 450*sF;
  canv2.width = 700*sF;
  canv2.height = 450*sF;

  let marginconst = 30
  let ball1x = 445
  let ball1y = 30
  let ball2x = 635
  let ball2y = 70
  let ball3x = 30
  let ball3y = 325
  let back1 = 0
  let back2 = 0
  let back3 = 2


  setTimeout(() => {
    /* document.getElementById("iframe").click() */
    console.log($('iframe[src="https://q14.mrqls.to/a/extra/m2/2021/Sing.2.2021.mp4?tok=6B594E4E306C72573766714E3758332D516D52365156495334525A6C4B567363345338433855674A476B71452533446B6732797871472D66714671554D6A437A7761446B3857716774703457635531524E326C6A5039345733584153526C386D617570736547366C4C625178675325334468636135535A6C50567367394E4D7277676770336B57336C6C51717879714C77746453316C337135774171476937253344765135395056735531534E692D53375144586D49346967656E312D753468615242566F5350675147456A6E47435234524956736B355364617A544D594A&valid=1LAHSWLTQaf44aJYkUCWfg&t=1646520114"]'))
  }, 1000);
  

  var c = document.getElementById("canv");
  var ctx = c.getContext("2d");
  var c2 = document.getElementById("canv2");
  var ctx2 = c2.getContext("2d");



  function lineTo(x, y) {
    ctx.lineTo(marginconst + x * sF, marginconst + y * sF)
  }  
  
  function lineTo2(x, y) {
    ctx.lineTo(marginconst + x * sF, marginconst + y * sF)
  }

  function frame() {
    ctx.fillStyle = '#131516'
    ctx.fillRect(0, 0, 1000, 1000)
    ctx.strokeStyle = 'grey'
    ctx.fillStyle = 'black'
    ctx.moveTo(marginconst + 5 * sF, marginconst + 60 * sF)
    lineTo(35, 30)
    lineTo(205, 30)
    lineTo(225, 50)
    lineTo(325, 50)
    lineTo(355, 20)
    lineTo(555, 20)
    lineTo(615, 80)
    lineTo(615, 180)
    lineTo(630, 195)
    lineTo(630, 345)
    lineTo(610, 365)
    lineTo(510, 365)
    lineTo(495, 350)
    lineTo(305, 350)
    lineTo(285, 370)
    lineTo(50, 370)
    lineTo(20, 340)
    lineTo(20, 240)
    lineTo(5, 225)
    lineTo(5, 60)
    ctx.stroke()
    ctx.stroke()
    ctx.stroke()
    ctx.clip()
    ctx.clearRect(0, 0, 1000, 1000);
    
  }


  function outline() {
    ctx2.moveTo(15 * sF, 140 * sF) // 1 (10, 150)
    ctx2.lineTo(15 * sF, 80 * sF) // 2
    ctx2.lineTo(55 * sF, 40 * sF) // 3
    ctx2.lineTo(245 * sF, 40 * sF) // 4
    ctx2.lineTo(265 * sF, 60 * sF) // 5
    ctx2.lineTo(345 * sF, 60 * sF) // 6
    ctx2.lineTo(375 * sF, 30 * sF) // 7
    ctx2.lineTo(435 * sF, 30 * sF) // 8 (440, 30)

    ctx2.strokeStyle = 'aqua'
    ctx2.stroke()

    ctx2.beginPath();
    ctx2.arc(445 * sF, 30 * sF, 10, 0, 2 * Math.PI);
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(445 * sF, 30 * sF, 4.7, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.beginPath();


    ctx2.arc(ball1x, ball1y, 3, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.fillStyle = 'aqua'
    ctx2.fill();


    ctx2.beginPath();
    ctx2.arc(15 * sF, 150 * sF, 10, 0, 2 * Math.PI);
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(15 * sF, 150 * sF, 4.7, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.beginPath();


    ctx2.moveTo(642 * sF, 77 * sF) // 1 (10, 150)
    ctx2.lineTo(665 * sF, 100 * sF) // 2
    ctx2.lineTo(665 * sF, 200 * sF) // 3
    ctx2.lineTo(680 * sF, 215 * sF) // 4
    ctx2.lineTo(680 * sF, 300 * sF) // 5
    ctx2.stroke();


    ctx2.beginPath();
    ctx2.arc(635 * sF, 70 * sF, 10, 0, 2 * Math.PI);
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(635 * sF, 70 * sF, 4.7, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.beginPath();


    ctx2.arc(ball2x, ball2y, 3, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.fillStyle = 'aqua'
    ctx2.fill();

    ctx2.beginPath();
    ctx2.arc(680 * sF, 310 * sF, 10, 0, 2 * Math.PI);
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(680 * sF, 310 * sF, 4.7, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.beginPath();


    ctx2.moveTo(575 * sF, 415 * sF) // 1 (10, 150)
    ctx2.lineTo(530 * sF, 415 * sF) // 2
    ctx2.lineTo(515 * sF, 400 * sF) // 3
    ctx2.lineTo(345 * sF, 400 * sF) // 4
    ctx2.lineTo(325 * sF, 420 * sF) // 5
    ctx2.lineTo(70 * sF, 420 * sF) // 6
    ctx2.lineTo(30 * sF, 380 * sF) // 7
    ctx2.lineTo(30 * sF, 335 * sF) // 8
    ctx2.stroke();


    ctx2.beginPath();
    ctx2.arc(585 * sF, 415 * sF, 10, 0, 2 * Math.PI);
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(585 * sF, 415 * sF, 4.7, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.beginPath();


    ctx2.arc(ball3x, ball3y, 3, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.fillStyle = 'aqua'
    ctx2.fill();

    ctx2.beginPath();
    ctx2.arc(30 * sF, 325 * sF, 10, 0, 2 * Math.PI);
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(30 * sF, 325 * sF, 4.7, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.beginPath();

  }
  frame()
  outline()
  outline()


  
setTimeout(() => {
    setInterval(() => {
    ctx2.clearRect(0, 0, window.innerWidth, window.innerHeight /* 0, 0 */ )

    if (back1 == 0 || back1 == 2) {
      if (back1 == 0) ball1x--


      if (ball1x <= 375 && ball1x > 345) ball1y++
      else if (ball1x <= 265 && ball1x > 245) ball1y--
      else if (ball1x <= 55 && ball1x > 15) ball1y++
      else if (ball1x == 15 && ball1y < 150) {
        back1 = 2
        ball1y++
      } else if (ball1y == 150) {
        back1 = 3
        setTimeout(() => {
          back1 = 1
        }, 3000);
      }


    } else if (back1 == 1) {
      if (ball1y < 80) ball1x++

      if (ball1x < 55) ball1y--
      else if (ball1x >= 245 && ball1x < 265) ball1y++
      else if (ball1x >= 345 && ball1x < 375) ball1y--
      else if (ball1x == 445) {
        back1 = 3
        setTimeout(() => {
          back1 = 0
        }, 3000);
      }
    }

    if (back2 == 0) {
      ball2y++

      if (ball2y >= 70 && ball2y <= 100) ball2x++
      else if (ball2y >= 200 && ball2y < 215) ball2x++
      else if (ball2y == 310) {
        back2 = 2
        setTimeout(() => {
          back2 = 1
        }, 3000);
      }
    } else if (back2 == 1) {
      ball2y--

      if(ball2y > 200 && ball2y <= 215) ball2x--
      else if(ball2y > 70 && ball2y <= 100) ball2x--
      if(ball2y == 70) {
        back2 = 2
        setTimeout(() => {
          back2 = 0
        }, 3000);
      }
    } 


    if(back3 == 0 || back3 == 2) {
      if(back3 == 0) ball3x++

      if(ball3y >= 325 && ball3y < 380) ball3y++
      else if(ball3x == 30 && back3 == 2) back3 = 0
      else if(ball3x >= 30 && ball3x <= 70) ball3y++
      else if(ball3x >= 325 && ball3x < 345) ball3y--
      else if(ball3x >= 515 && ball3x < 530) ball3y++
      else if(ball3x == 585) {
        back3 = 3
        setTimeout(() => {
          back3 = 1
        }, 3000);
      }
    } else if(back3 == 1) {

      if(ball3x > 30)ball3x--
      

      if(ball3x > 515 && ball3x <= 530) ball3y--
      else if(ball3x > 325 && ball3x <= 345) ball3y++
      else if(ball3y > 325 && ball3x <= 70) ball3y--
      else if(ball3y == 325) {
        back3 = 3
        setTimeout(() => {
          back3 = 2
        }, 3000);
      }


    }


    /* console.log(ball3y + ' ' + ball3x + ' ' + back3) */

    outline()
    outline()
  }, 10);
}, 1000)


  let frames = document.getElementsByTagName('iframe');
  let t=1;
  for (let i in frames){
    if(t===frames.length)break;
    t++;
  }
    console.log($('iframe'))/* .contents().find('video')[0].play(); */

})













//console.log("%c%s", "margin-left:100px; position: relative; height: 100px; width: 100px; background-color: green;", "WARNING!")