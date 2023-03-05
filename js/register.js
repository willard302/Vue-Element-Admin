window.onload = function(){
    $('#confirmBtn').on('click', () => {
        let account = $('#email').val();
        let reg = /^(.*@.*mail\.com)$/
        let accTest = reg.test(account)
        if(!accTest) return alert("請輸入您的eMail");

        window.location.href = ("Email_verify.html");
    })


}