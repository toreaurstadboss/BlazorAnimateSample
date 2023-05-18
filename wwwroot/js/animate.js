
function RegisterAnimationStartupTrigger(wrapperAnimationElementId, triggerElementId, triggerEventId) {
    //debugger
    var elem = document.getElementById(wrapperAnimationElementId);
    elem.classList.remove('aos-init'); //remove aos-animate class to avoid auto loading animation on scroll
    elem.classList.remove('aos-animate'); //remove aos-animate class to avoid auto loading animation on scroll
    var triggerElement = document.getElementById(triggerElementId);
    triggerElement.addEventListener(triggerEventId, function () { AddAosAnimateCssClass(elem, triggerEventId); }); //remove aos-animate class to avoid auto loading animation on scroll
}

function AddAosAnimateCssClass(el, triggerEventId) {
    debugger

    el.classList.remove('aos-init');
    el.classList.remove('aos-animate');

    if (triggerEventId.toLowerCase() == 'change') {
        if (!event.target.checked) {
            return; //in case this is a checkbox, only trigger on checked state
        }
    }

    setTimeout(function () {
        el.classList.add('aos-init');
        el.classList.add('aos-animate');
    }, 500);
}