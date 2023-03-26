var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 1.5;

var c = canvas.getContext('2d');

c.beginPath();
c.moveTo(250, 0);
c.lineTo(250, 250);
c.lineTo(700, 250);
c.lineTo(700, 1080);
c.strokeStyle = '#3d4849f1';
c.stroke();

c.beginPath();
c.moveTo(135, 0);
c.lineTo(135, 400);
c.lineTo(0, 400);
c.strokeStyle = '#3d4849f1';
c.stroke();

c.beginPath();
c.moveTo(240, 1080);
c.lineTo(240, 750);
c.lineTo(0, 750);
c.strokeStyle = '#3d4849f1';
c.stroke();

c.beginPath();
c.moveTo(1820, 100);
c.lineTo(1020, 100);
c.lineTo(1020, 760);
c.lineTo(1820, 760);
c.strokeStyle = '#3d4849f1';
c.stroke();