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
    })
})
