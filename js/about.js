window.onload = function () {

    var inrtoBtn = document.getElementsByClassName('introBtn')[0];
    var introGroup = document.getElementsByClassName('introGroup')[0];
    var serveBtn = document.getElementsByClassName('serveBtn')[0];
    var html = '';
    var textArr = [];
    var serveArr = [];

    inrtoBtn.addEventListener('click',() => introGet());
    serveBtn.addEventListener('click',() => serveGet());

    const introGet = () => {
        axios.get("./DB/about.json").then(res => {
            html = '';
            filterFn(res, "introduce");

            textArr[0].text.forEach(e => {
                html += `<li>${e}</li><br>`
            });
            introGroup.innerHTML = `
            <div class="introHeader">
                <h1>About us</h1>
            </div>
            <ul class="introContent">${html}</ul>
            `
        }).catch(err => {
            console.error(err)
        })
    };

    const serveGet = () => {
        axios.get("./DB/about.json").then(res => {
            filterFn(res, "service");

            textOutput("Bio Feedback");
            textOutput("ISCIM Medical Computing Center Biofeedback Types");
            textOutput("Time-Space Medicine");
        })
    }

    const filterFn = (res, value) => {
        introGroup.innerHTML = ''
        textArr = res.data.filter(e => e.title === value)
    }

    const textOutput = (value) => {
        serveArr = [];
        html = ''
        serveArr = textArr[0].text.filter(e => e.item === value);
        serveArr[0].content.forEach(e => {
            html += `<li>${e}</li><br>`
        })
        introGroup.innerHTML += `
            <div class="introHeader">
                <h1>${value}</h1>
                <ul class="introHeader">${html}</ul>
            </div>
            `
    }

    introGet()

}