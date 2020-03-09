$(function() {
    var getUser = () => {
        return {
            username: $("#username").val(),
            password: $("#password").val()
        }
    }
    $("#reset").click(() => {
        $("#username").val("")
        $("#password").val("")
    })
    $("#submit").click(() => {
        var user = getUser()
        console.log(user)
        req("POST")("/finduser")(user)
        .then(res => {
            if(!res.isUser) {
                return showTip("account not right")("faile")
            }
            return (() => {
                setTimeout(() => {
                    showTip("congratulation")("success");
                    location.href="/backfront"
                },1500)
            })()
        })
    })
})
