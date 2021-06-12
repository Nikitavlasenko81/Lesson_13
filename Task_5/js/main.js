document.querySelector('#field').addEventListener('click',(e)=>{
    let fieldCoords = e.target.getBoundingClientRect();
    let ball = document.querySelector('#ball')
    let ballCoordinate ={
        top: e.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: e.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    }

    if (ballCoordinate.top < 0) ballCoordinate.top = 0;
    if (ballCoordinate.left < 0) ballCoordinate.left = 0;
    if (ballCoordinate.left + ball.clientWidth > field.clientWidth) {
        ballCoordinate.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoordinate.top + ball.clientHeight > field.clientHeight) {
        ballCoordinate.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoordinate.left + 'px';
    ball.style.top = ballCoordinate.top + 'px';
})






