let blockquote = document.querySelector('blockquote');

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {
    let box = anchor.getBoundingClientRect();
    let anchorCoordinates = {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    }

    if(position == "top-out" ){
        elem.style.left = anchorCoordinates.left + "px";
        elem.style.top = anchorCoordinates.top - elem.offsetHeight + "px";
    }else if (position == "right-out" ){
        elem.style.left = anchorCoordinates.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoordinates.top + "px";
    }else if (position == "right-in" ){
        elem.style.width = '150px';
        elem.style.left = anchorCoordinates.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = anchorCoordinates.top + "px";
    }else if (position == "top-in" ){
        elem.style.left = anchorCoordinates.left + "px";
        elem.style.top = anchorCoordinates.top + "px";
    }else if (position == "bottom-in" ){
        elem.style.left = anchorCoordinates.left + "px";
        elem.style.top = anchorCoordinates.top + anchor.offsetHeight - elem.offsetHeight + "px";
    }

}
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");



