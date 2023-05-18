
function RegisterAnimationStartupTrigger(wrapperAnimationElementId, triggerElementId, triggerEventId) {
    //debugger
    if (event != null && event.target != null && event.target != undefined && event.target.closest) {
        var closestParentDiv = event.target.closest('div');
        if (closestParentDiv != null && closestParentDiv.id == wrapperAnimationElementId) {

            //sub elements of the wrapper div should not trigger animation, to avoid AOS running animation again
            return;
        }
    }
    
    var elem = document.getElementById(wrapperAnimationElementId);
    if (elem == null || elem == undefined) {
        return;
    }
    var triggerElement = document.getElementById(triggerElementId);
    if (triggerElement == null || triggerElement == undefined) {
        return;
    }

    elem.classList.remove('aos-init'); //remove aos-animate class to avoid auto loading animation on scroll
    elem.classList.remove('aos-animate'); //remove aos-animate class to avoid auto loading animation on scroll

    triggerElement.addEventListener(triggerEventId, function () { AddAosAnimateCssClass(elem, triggerEventId, wrapperAnimationElementId); }); //remove aos-animate class to avoid auto loading animation on scroll
}

function AddAosAnimateCssClass(elem, triggerEventId, wrapperAnimationElementId) {
    //debugger
    if (event != null && event.target != null && event.target != undefined && event.target.closest) {
        var closestParentDiv = event.target.closest('div');
        if (closestParentDiv != null && closestParentDiv.id == wrapperAnimationElementId) {

            //sub elements of the wrapper div should not trigger animation, to avoid AOS running animation again
            return;
        }
    }
    if (elem == null || elem == undefined) {
        return;
    }

    elem.classList.remove('aos-init');
    elem.classList.remove('aos-animate');

    if (triggerEventId.toLowerCase() == 'change') {
        if (!event.target.checked) {
            return; //in case this is a checkbox, only trigger on checked state
        }
    }

    setTimeout(function () {
        elem.classList.add('aos-init');
        elem.classList.add('aos-animate');
    }, 500);
}

function RestartAosEventToImplicitEventDomContentLoaded() {
    AOS.init({
        easing: 'ease-in-out',
        startEvent: 'DOMContentLoaded'
    });
}

function DisableAosEventToImplicitEventDomContentLoaded() {
    AOS.init({
        easing: 'ease-in-out',
        startEvent: 'MyCustomEvent'
    });
}