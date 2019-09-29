function findOffset(element) {
    var top = 0, left = 0;

    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);

    return {
        top: top,
        left: left
    };
}

window.onload = function () {
    var stickyHeader = document.getElementById('sticky-header');
    var headerOffset = findOffset(stickyHeader);

    window.onscroll = function () {
        // body.scrollTop is deprecated and no longer available on Firefox
        var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (bodyScrollTop > headerOffset.top) {
            stickyHeader.classList.add('stick');
        } else {
            stickyHeader.classList.remove('stick');
        }
    };
};