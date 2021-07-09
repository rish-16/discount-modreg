document.addEventListener('DOMContentLoaded', () => {
    console.log('App loaded.')

    const aboutBtn = document.getElementById('about')
    const viewClassesBtn = document.getElementById('viewclasses')
    const modSelectBtn = document.getElementById('modselect')
    const modReqBtn = document.getElementById('modreq')
    const selectTutBtn = document.getElementById('selecttut')
    const addSwapBtn = document.getElementById('addswap')
    const dropBtn = document.getElementById('drop')
    const appealsBtn = document.getElementById('appeals')

    const aboutPanel = document.getElementById('about-panel')
    const viewClassesPanel = document.getElementById('view-panel')
    const modSelectPanel = document.getElementById('modsel-panel')
    const modReqPanel = document.getElementById('modreq-panel')
    const selectTutPanel = document.getElementById('selecttut-panel')
    const addSwapPanel = document.getElementById('addswap-panel')
    const dropPanel = document.getElementById('drop-panel')
    const appealsPanel = document.getElementById('appeals-panel')

    const pageTitle = document.getElementById('page-title')

    // load the about panel on page load
    pageTitle.innerText = 'About ModReg@EduRec'
    modSelectPanel.style.display = 'block'

    function switchPanel(idx) {
        var panels = [
            aboutPanel, 
            viewClassesPanel,
            modSelectPanel,
            modReqPanel,
            selectTutPanel,
            addSwapPanel,
            dropPanel,
            appealsPanel
        ]

        for (var i=0, item; item = panels[i]; i++) {
            // Look no need to do list[i] in the body of the loop
            // console.log("Looping: index ", i, "item" + item);
            item.style.display = 'none'
        }

        console.log(`Showing panel ${idx}.`)

        panels[idx].style.display = 'block'
    }

    aboutBtn.addEventListener('click', () => {
        console.log('About clicked')
        pageTitle.innerText = 'About ModReg@EduRec'
        switchPanel(0)
    })

    viewClassesBtn.addEventListener('click', () => {
        console.log('View Classes clicked')
        pageTitle.innerText = 'View My Classes@ModReg'
        switchPanel(1)
    })

    modSelectBtn.addEventListener('click', () => {
        console.log('Module Select clicked')
        pageTitle.innerText = 'Select Modules'
        switchPanel(2)
    })

    modReqBtn.addEventListener('click', () => {
        console.log('Mod Requests clicked')
        pageTitle.innerText = 'Submit Module Requests'
        switchPanel(3)
    })

    selectTutBtn.addEventListener('click', () => {
        console.log('Select Tutorials clicked')
        pageTitle.innerText = 'Select Tutorials/Labs'
        switchPanel(4)
    })

    addSwapBtn.addEventListener('click', () => {
        console.log('Add Swap clicked')
        pageTitle.innerText = 'Add/Swap Tutorials/Labs'
        switchPanel(5)
    })

    dropBtn.addEventListener('click', () => {
        console.log('Drop clicked')
        pageTitle.innerText = 'Drop Classes'
        switchPanel(6)
    })

    appealsBtn.addEventListener('click', () => {
        console.log('Appeals clicked')
        pageTitle.innerText = 'Submit Appeals/Inquiries'
        switchPanel(7)
    })
})