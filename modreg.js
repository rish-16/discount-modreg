const ALLMODS = `{
    "CS1101S": {
        "name": "CS1101S",
        "detailed-name": "Programming Methodology I",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS2040S": {
        "name": "CS2040S",
        "detailed-name": "Data Structures and Algorithms",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "BT1101": {
        "name": "BT1101",
        "detailed-name": "Introduction to Business Analytics",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS1010S": {
        "name": "CS1010S",
        "detailed-name": "Programming Methodology",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "MKT1705X": {
        "name": "MKT1705X",
        "detailed-name": "Principles of Marketing",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "EC1101E": {
        "name": "EC1101E",
        "detailed-name": "Introduction to Economic Analysis",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "BT2101": {
        "name": "BT2101",
        "detailed-name": "Econometrics Modeling for Business Analytics And/Or",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "BT2102": {
        "name": "BT2102",
        "detailed-name": "Data Management and Visualisation",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS2030": {
        "name": "CS2030",
        "detailed-name": "Programming Methodology II",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS1010J": {
        "name": "CS1010J",
        "detailed-name": "Programming Methodology",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS1231": {
        "name": "CS1231",
        "detailed-name": "Discrete Structures ",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "MA1521": {
        "name": "MA1521",
        "detailed-name": "Calculus for Computing ",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "IS2101": {
        "name": "IS2101",
        "detailed-name": "Business and Technical Communication",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS2040": {
        "name": "CS2040",
        "detailed-name": "Data Structures and Algorithm ",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "IS1103": {
        "name": "IS1103",
        "detailed-name": "Ethics in Computing",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS1231S": {
        "name": "CS1231S",
        "detailed-name": "Discrete Structures",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "MA2001": {
        "name": "MA2001",
        "detailed-name": "Linear Algebra I",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS2040C": {
        "name": "CS2040C",
        "detailed-name": "Data Structures & Algorithms",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS2100": {
        "name": "CS2100",
        "detailed-name": "Computer Organisation",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CS1010": {
        "name": "CS1010",
        "detailed-name": "Programming Methodology",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CG1111A": {
        "name": "CG1111A",
        "detailed-name": "Engineering Principles and Practice I",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "MA1511": {
        "name": "MA1511",
        "detailed-name": "Engineering Calculus",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "MA1512": {
        "name": "MA1512",
        "detailed-name": "Differential Equations for Enginneering",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "EG1311": {
        "name": "EG1311",
        "detailed-name": "Design And Make (New)",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "CG2111A": {
        "name": "CG2111A",
        "detailed-name": "Engineering Principles and Practice II",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "DTK1234": {
        "name": "DTK1234",
        "detailed-name": "Design Thinking (New)",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "PF1101": {
        "name": "PF1101",
        "detailed-name": "Fundamentals of Project Management (New)",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "GEA1000": {
        "name": "GEA1000",
        "detailed-name": "Quantitative Reasoning with Data",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "MA1508E": {
        "name": "MA1508E",
        "detailed-name": "Linear Algebra for Engineering",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "GER1000": {
        "name": "GER1000",
        "detailed-name": "Quantitative Reasoning",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    },
    "GEH1026": {
        "name": "GEH1026",
        "detailed-name": "Living with Mathematics",
        "vacancy": "600",
        "occupancy": 153,
        "lecture-id": "L-L1-1226",
        "units": "4.00"
    }
}`

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

    const popupResultSubjectInput = document.getElementById('modsel-container-subject-input')
    const popupResultNbrInput = document.getElementById('modsel-container-catalog-nbr-input')
    const popupResultModTitleInput = document.getElementById('modsel-container-subject-mod-title-input')
    const popupResultBannerTitle = document.getElementById('mod-result-title')
    const modResultsTable = document.getElementById('modsel-search-result-container')

    var curRank = 1 // maintains next highest rank in Table

    // load the about panel on page load
    pageTitle.innerText = 'About ModReg@EduRec'
    aboutPanel.style.display = 'block'

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

        popupResultSubjectInput.value = ''
        popupResultNbrInput.value = ''
        popupResultModTitleInput.value = ''
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
            curRank -= 1
        })

        modContainerTable.appendChild(mod)
    }

    function addModToResults(details) {
        var mod = document.createElement('div')
        mod.classList += 'mod-res'

        var modClass = document.createElement('p')
        modClass.innerText = details['lecture-id']
        modClass.classList += 'mod-res-class'

        var modActivity = document.createElement('p')
        modActivity.innerText = 'Lecture'
        modActivity.classList += 'mod-res-activity'

        var modSession = document.createElement('p')
        modSession.innerText = 'Regular'
        modSession.classList += 'mod-res-session'
        
        var modVacancy = document.createElement('p')
        modVacancy.innerText = details['vacancy']
        modVacancy.classList += 'mod-res-vacancy'
        
        var modOcc = document.createElement('p')
        modOcc.innerText = details['occupancy']
        modOcc.classList += 'mod-res-selected'

        var modPlaceholder = document.createElement('p')
        modPlaceholder.classList += 'mod-res-select'

        var selectBtn = document.createElement('button')
        selectBtn.innerHTML = 'Select'
        selectBtn.classList += 'mod-res-select-btn'
        modPlaceholder.appendChild(selectBtn)

        selectBtn.addEventListener('click', () => {
            modSelPopup.style.display = 'none' // hide search popup
            addModToTable(details['detailed-name'], details['units'], curRank)
            curRank += 1

            console.log('flushing')

            // flush
            modResultsTable.innerHTML = `
            <div id="modsel-search-result-header">
                <p style="width: 20%; font-weight: bold;">Class</p>
                <p style="width: 20%; font-weight: bold;">Activity</p>
                <p style="width: 10%; font-weight: bold;">Session</p>
                <p style="width: 10%; font-weight: bold;">Vacancy</p>
                <p style="width: 25%; font-weight: bold;">Students Selected</p>
                <p style="width: 15%; font-weight: bold;"></p>
            </div>`

            popupResultSubjectInput.value = ''
            popupResultNbrInput.value = ''
            popupResultModTitleInput.value = ''

            popupResultBannerTitle.innerHTML = ''
        })

        mod.appendChild(modClass)
        mod.appendChild(modActivity)
        mod.appendChild(modSession)
        mod.appendChild(modVacancy)
        mod.appendChild(modOcc)
        mod.appendChild(modPlaceholder)

        modResultsTable.appendChild(mod)
    }

    function searchMods(key) {
        const allmods = JSON.parse(ALLMODS)
        console.log(allmods)

        if (allmods[key] != undefined) {
            // module found
            return allmods[key]
        } else {
            popupResultBannerTitle.innerHTML = `Module ${key} not found. Try again with another search query.`
        }
    }

    searchModuleBtn.addEventListener('click', () => {
        console.log('Searching')
        // get the results from the text field
        var moduleCode = popupResultSubjectInput.value
        console.log(moduleCode)

        popupResultBannerTitle.innerHTML = `Select a Class for Module ${moduleCode} <i class="fas fa-info-circle" style="color: #54a0ff; padding-left: 5px;"></i>`

        // search for the module code and get details
        var details = searchMods(moduleCode)

        // make a row for the module in results
        // on select, render row in main mod table
        addModToResults(details)
    })
})