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

    const addClassBtn = document.getElementById('modsel-submit')
    const modSelPopup = document.getElementById('modsel-select-popup')
    const modSelPopupClose = document.getElementById('modsel-popup-close')
    const searchModuleBtn = document.getElementById('modsel-search')
    const modContainerTable = document.getElementById('modsel-final-mods-container')

    // const mcSetter = document.getElementById('modsel-mc-setter')
    // var curMCLimit = 0;
    // 
    // mcSetter.addEventListener('click', () => {
        // curMCLimit = mcSetter.innerText;
        // console.log(curMCLimit)
    // })

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

    addClassBtn.addEventListener('click', () => {
        console.log('Adding class')
        modSelPopup.style.display = 'block'
    })

    modSelPopupClose.addEventListener('click', () => {
        console.log('Closing popup')
        modSelPopup.style.display = 'none'
    })

    function addModToTable(modTitleText, modUnitText, modRankText) {
        var mod = document.createElement('div')
        mod.classList += 'mod'

        var modTitle = document.createElement('p')
        modTitle.innerText = modTitleText
        modTitle.classList += 'mod-title'

        var modUnit = document.createElement('p')
        modUnit.innerText = modUnitText
        modUnit.classList += 'mod-units'

        var modRank = document.createElement('p')
        modRank.innerText = modRankText
        modRank.classList += 'mod-rank'
        
        var modStatus = document.createElement('p')
        modStatus.innerText = 'Not Selected'
        modStatus.classList += 'mod-status'
        
        var modEdit = document.createElement('p')
        modEdit.innerText = 'Edit/View Details'
        modEdit.classList += 'mod-edit'

        var modRemove = document.createElement('p')
        modRemove.innerText = 'Remove'
        modRemove.classList += 'mod-remove'

        mod.appendChild(modTitle)
        mod.appendChild(modUnit)
        mod.appendChild(modRank)
        mod.appendChild(modStatus)
        mod.appendChild(modEdit)
        mod.appendChild(modRemove)

        modRemove.addEventListener('click', () => {
            modContainerTable.removeChild(mod)
        })

        modContainerTable.appendChild(mod)
    }

    searchModuleBtn.addEventListener('click', () => {
        console.log('Closing popup')
        modSelPopup.style.display = 'none'
        addModToTable('CS1231 Discrete Structures', 4.00, 3)
    })
})