var showTip = (text) => {
    var templateFaile = `
        <div class="container animated bounceIn top-0 p-4 is-fullhd fixed sm:w-full xl:w-2/3">
            <div class="notification is-danger p-3 ">
                <p class="font-bold text-center">${text}!</p>
            </div>
        </div>
    `
    var templateSuccess = `
        <div class="container animated bounceIn top-0 p-4 is-fullhd fixed sm:w-full xl:w-2/3">
            <div class="notification is-success p-3 ">
                <p class="font-bold text-center">${text}!</p>
            </div>
        </div>
    `
    var processFn = (template) => {
        var element = $(template)
        $(".body").append(element)
        setTimeout(() => {
            element.addClass("fadeOut")
        },1000)
        setTimeout(() => {
            element.remove()
        },2000)
    }
    return (type) => {
        if(type === "success") {
            return processFn(templateSuccess)
        }
        if(type === "faile") {
            return processFn(templateFaile)
        }
    }
}
