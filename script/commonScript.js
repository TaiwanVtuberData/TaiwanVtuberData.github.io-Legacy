function RedirectToFirstPage() {
    window.location.href = "/index.html";
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

function RedirectToAllPage() {
    window.location.href = "/all.html";
}

function RedirectToGroupPage(groupUrl) {
    window.location.href = "/group/" + groupUrl + ".html";
}

function ShowYouTubeEmbed(id, embedVideoId) {
    var elementId = "frame" + id;
    var e = document.getElementById(elementId);

    if (e.style.visibility === "hidden") {
        e.style.visibility = "visible";
        e.style.display = "";
        e.src = "https://www.youtube.com/embed/" + embedVideoId;
    }
    else {
        e.style.visibility = "hidden";
        e.style.display = "none";
        e.src = "";
    }
}

function ShowTwitchEmbed(id, embedVideoId) {
    var elementId = "frame" + id;
    var e = document.getElementById(elementId);

    if (e.style.visibility === "hidden") {
        e.style.visibility = "visible";
        e.style.display = "";
        e.src = "https://player.twitch.tv/?video=" + embedVideoId + "&parent=" + window.location.hostname + "&autoplay=false";
    }
    else {
        e.style.visibility = "hidden";
        e.style.display = "none";
        e.src = "";
    }
}