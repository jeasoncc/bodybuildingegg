window.onload = () => {
    const ele = document.querySelector('#inputSuccess2');
    const cloneEle = document.querySelector('.actionGroup');
    const formEle = document.querySelector('#form');

    const MAXCLONENUM = 10
    function removeCloneActionItem() {
            let cloneItems = document.querySelectorAll('.cloneItem')
            console.log(cloneItems)
            Array.from(cloneItems).map(curr => {
                console.log(curr)
                formEle.removeChild(curr)
            })
    }

    function removeCloneItem(contentStr,cloneItemsStr) {
        let cloneItems = document.querySelectorAll(cloneItemsStr)
        let content = document.querySelector(contentStr)
        console.log(cloneItems)
        console.log(content)
        Array.from(cloneItems).map(curr => {
            console.log(curr)
            content.removeChild(curr)
        })
    }


    ele.addEventListener("input", (e) => {
        removeCloneActionItem()

        let shoutCloneNum = e.target.value - 1;
        if (shoutCloneNum >== MAXCLONENUM) {
            e.target.value = MAXCLONENUM
            shoutCloneNum = MAXCLONENUM - 1;
        }
        for(let i=0;i<shoutCloneNum;i++) {
            let cloneItem = cloneEle.cloneNode(true)
            cloneItem.classList.add('cloneItem')
            formEle.appendChild(cloneItem)
        }
    })
    document.querySelector('#resetForm').addEventListener('click', (e) => {
        removeCloneActionItem();
    })
    document.querySelector('#pushMyWriteActionGroupBtn').addEventListener('click', (e) => {
        removeCloneItem('#modalBody', '.cloneText')
        let inputItems = formEle.elements['input'];
        let modeEle = document.querySelector('#modalBody');
        console.log(modeEle)

        Array.from(inputItems).map(cur => {
            console.log(cur.value)
            let divItem = document.createElement('div');
            divItem.classList.add('cloneText')
            let textItem = document.createTextNode(cur.value)
            divItem.appendChild(textItem);
            modeEle.appendChild(divItem);
        })
    })
}
