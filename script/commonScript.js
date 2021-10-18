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