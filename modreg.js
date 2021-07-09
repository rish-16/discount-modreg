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

    function switchPanel(idx) {
        var panels = [
            aboutPanel, viewClassesPanel, modSelectPanel, modReqPanel, selectTutPanel, addSwapPanel, dropPanel, appealsPanel
        ]

        for (panel in panels) {
            panel.style.display = 'none'
        }

        panels[idx].style.display = 'block'
    }

    aboutBtn.addEventListener('click', () => {
        console.log('About clicked')
        pageTitle.innerText = 'About ModReg@EduRec'
    })

    viewClassesBtn.addEventListener('click', () => {
        console.log('View Classes clicked')
        pageTitle.innerText = 'View My Classes@ModReg'
    })

    modSelectBtn.addEventListener('click', () => {
        console.log('Module Select clicked')
        pageTitle.innerText = 'Select Modules'
    })

    modReqBtn.addEventListener('click', () => {
        console.log('Mod Requests clicked')
        pageTitle.innerText = 'Submit Module Requests'
    })

    selectTutBtn.addEventListener('click', () => {
        console.log('Select Tutorials clicked')
        pageTitle.innerText = 'Select Tutorials/Labs'
    })

    addSwapBtn.addEventListener('click', () => {
        console.log('Add Swap clicked')
        pageTitle.innerText = 'Add/Swap Tutorials/Labs'
    })

    dropBtn.addEventListener('click', () => {
        console.log('Drop clicked')
        pageTitle.innerText = 'Drop Classes'
    })

    appealsBtn.addEventListener('click', () => {
        console.log('Appeals clicked')
        pageTitle.innerText = 'Submit Appeals/Inquiries'
    })
})