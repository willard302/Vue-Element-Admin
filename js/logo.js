var imgData = [
    'bg01',
    'bg02',
    'bg03'
]

const text = document.querySelectorAll('.thePaths');

$(function()  {
    text.forEach((e)=>{
        console.log(e.getTotalLength())
    })

    imgData.forEach( e => {
        $('.bg').attr("background-image", "")
    })
})


