window.onload = () => {
    const ele = document.querySelector('#inputSuccess2');
    const cloneEle = document.querySelector('.actionGroup');
    const formEle = document.querySelector('#form');

    function removeCloneActionItem() {
            let cloneItems = document.querySelectorAll('.cloneItem')
            console.log(cloneItems)
            Array.from(cloneItems).map(curr => {
                console.log(curr)
                formEle.removeChild(curr)
            })
    }

    ele.addEventListener("input", (e) => {
        removeCloneActionItem()

        let shoutCloneNum = e.target.value;
        for(let i=0;i<shoutCloneNum;i++) {
            let cloneItem = cloneEle.cloneNode(true)
            cloneItem.classList.add('cloneItem')
            formEle.appendChild(cloneItem)
        }
    })
}
