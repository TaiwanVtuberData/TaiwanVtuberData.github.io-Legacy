function CloseThisTab() {
	window.close();
}

function RedirectIndexPageWithCheck(newPage, maxPageNumber) {
	if (1 <= newPage && newPage <= maxPageNumber) {
    window.location.href = "/index/" + newPage + ".html";
	}
}

function RedirectIndexPage(newPage) {
    window.location.href = "/index/" + newPage + ".html";
}

function RedirectToPrevPage(thisPageIndex) {
    var newPage = Math.max(1, thisPageIndex - 1);

    if (newPage !== thisPageIndex) {
        RedirectIndexPage(newPage);
    }
}

function RedirectToNextPage(thisPageIndex, maxPageNumber) {
    var newPage = Math.min(maxPageNumber, thisPageIndex + 1);

    if (newPage !== thisPageIndex) {
        RedirectIndexPage(newPage);
    }
}

const Site = {
    YouTube: 1,
    Twitch: 2
 };

function ShowEmbedVideo(site, embedVideoId) {
    var modal = document.getElementById("videoModal");
    modal.style.display = "block";

    var frame = document.getElementById("videoFrame");

    switch(site) {
        case Site.YouTube:
            frame.src = "https://www.youtube.com/embed/" + embedVideoId;
            break;
        case Site.Twitch:
            frame.src = "https://player.twitch.tv/?video=" + embedVideoId + "&parent=" + window.location.hostname + "&autoplay=false";
            break;
        default:
            break;
        }
}

function ShowList(id) {
    var elementId = "list" + id;
    var e = document.getElementById(elementId);

    if (e.style.visibility === "hidden") {
        e.style.visibility = "visible";
        e.style.display = "";
    }
    else {
        e.style.visibility = "hidden";
        e.style.display = "none";
    }
}

// copied from https://jonbeebe.net/2017/07/duckduckgo-site-search/
function DuckDuckGoSearch() {
    var searchField = document.getElementById("searchField");
    if (searchField && searchField.value) {
        window.location.href = "https://duckduckgo.com/?q=site:taiwanvtuberdata.github.io " + searchField.value;
    }
}

// copied from https://www.w3schools.com/howto/howto_js_filter_table.asp
// arrayIdIndexPair should be an array. Each element in said array shall contain two elements.
// First is id of <th> column, second is index of column.
// Example: [['displayNameSearchBoxNameByChannel',0], ['displayNameSearchBoxNameByGroup', 3]]
function SearchMainTable(arrayIdIndexPair) {

    const tr = document.getElementById("mainTable").getElementsByTagName("tr");

    const arrayFilter = [];
    for(var i = 0; i < arrayIdIndexPair.length; i++) {
        arrayFilter.push(document.getElementById(arrayIdIndexPair[i][0]).value.toUpperCase());
    }

    for (var i = 1; i < tr.length; i++) {
        // Hide the row initially
        tr[i].style.display = "none";
    }

    for (var i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td");
        
        var isDisplay = true;
        for (var j = 0; j < arrayFilter.length; j++) {
            if(arrayFilter[j]=="") {
                continue;
            }
            
            const tdIdx = td[arrayIdIndexPair[j][1]];
            if (tdIdx) {
                var txtValue = tdIdx.textContent || tdIdx.innerText;
                if (txtValue.length < 1) {
                    isDisplay = false;
                }
                else if (txtValue.toUpperCase().indexOf(arrayFilter[j]) <= -1) {
                    isDisplay = false;
                }
            }
        }
        
        if (isDisplay) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
function SearchMainTableWithDelay(arrayIdIndexPair) {
    let SearchDelay = null;
    if (SearchDelay != null) clearTimeout(SearchDelay);

    SearchDelay = setTimeout(SearchMainTable(arrayIdIndexPair), 500);
}

function OnDropDownChangeEvent(dropDownElement) {
    var selectedValue = dropDownElement.options[dropDownElement.selectedIndex].value;
    window.location.href = selectedValue + ".html";
}
