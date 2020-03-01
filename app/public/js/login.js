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
                console.log("error")
                showTip("account not right")("faile")
            }
                showTip("congratulation")("success")
        })
    })
})
