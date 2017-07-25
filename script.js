/* JavaScript for hide function on GitHub personal website
 * will-hodge.github.io */

function hiding(x, y) {
    var hide = document.getElementById(y)
    hide.style.display = 'none';
    var show = document.getElementById(x);
    if (show.style.display != 'block'){
        show.style.display = 'none';
    }
    if (show.style.display == 'none') {
        show.style.display = 'block';
    } else {
        show.style.display = 'none';
    }
}
