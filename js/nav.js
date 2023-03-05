$(function () {

    axios.all([navFn(), footFn()]).then(axios.spread((nav, foot) => {
        $('.common-part').html(nav.data)
        navSW()
        $('#iFoot').html(foot.data)
        footSW('.btn1', 'https://www.youtube.com/embed/6C8ag2HtnAc');
        footSW('.btn2', 'https://www.youtube.com/embed/6LdjhGsyFmA');
        footSW('.btn3', 'https://www.youtube.com/embed/ng6SMbejFOs');
        $('.utubeBox').find('iframe').attr('src', "https://www.youtube.com/embed/6C8ag2HtnAc")
    }));

    function navFn() {
        return axios.get("./Component/nav.html")
    };

    function navSW() {
        $('.navBtn').on('click', function () {
            $('.navBoard').toggleClass('open');
            $('.navBtn').toggleClass('open');
            $('.navBtn').find('i').toggleClass('fa-bars');
            $('.navBtn').find('i').toggleClass('fa-xmark');

            pageOpen('is-home') ? navSelected('.home > a')
                : pageOpen('is-about') ? navSelected('.about > a')
                    : pageOpen('is-register') ? navSelected('.register > a')
                        : pageOpen('is-personalHome') ? navSelected('.personalHome > a')
                            : pageOpen('is-cosmos') ? navSelected('.cosmos > a') : navSelected('.iMusic > a')
        })
    };

    function pageOpen(value) {
        return $('.l-main').hasClass(value)
    }

    function navSelected(value) {
        $(value).css("color", "#6c757d")
    }

    function footFn() {
        return axios.get("./Component/foot.html")
    };

    function footSW(btn, src) {
        $(btn).on('click', () => {
            $('.utubeBox').find('iframe').attr('src', src);
        })
    };
})



