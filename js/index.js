
$(function () {
    let timeGo = null;
    let circleGo = null;
    let idx = 0;
    let timer = 0;

    const turnCircle = (value) => {
        $('.a' + value).find('svg').addClass('isCurrent')
        circleGo = setInterval( () => {
            timer += 4;
            if (timer === 300) return timer = 0
            $('.a' + value + ' > .c-circle.isCurrent').attr('stroke-dashoffset', timer);
        }, 40)
    }

    const init = () => {
        for (let i = 1; i <= 3; i++) {
            $('.t' + i).removeClass('open');
            $('.a' + i).find('svg').removeClass('isCurrent');
        }
        clearInterval(circleGo)
    }

    const turn = () => {
        idx++
        if (idx > 3) return idx = 1
        $('.bg').css('background-image', '"url(../Data/index/bg0' + idx + '.jpg)"')
        init()
        $('.t' + idx).addClass('open')
        turnCircle(idx)
    };

    timeGo = setInterval(turn, 3000);

    // for (let i = 1; i <= 3; i++) {
    //     $('.s' + i).on('mouseover', () => {
    //         $('.bg').css('background-image', 'url(../Data/index/bg0' + i + '.jpg)')
    //         init()
    //         $('.t' + i).addClass('open')
    //         timer = 0
    //         turnCircle(i)
    //     })
    // }

    

    

    turn()
})