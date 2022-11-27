'use strict';

/**
 * Shortcut function to make creating/adding an
 * element to the DOM
 * @param {string} elementName
 * @param {string} idName
 * @param {string} className
 * @param {string} str
 * @param {string} selector
 */
function makeEl(elementName, idName, className, str, selector) {
    var tag = document.createElement(elementName),
        text = document.createTextNode(str);

    if (idName !== undefined || idName !== null) {
        tag.id = idName;
    }

    if (className !== undefined || className !== null) {
        tag.className = className;
    }

    // create a new text node and add it to the div
    tag.appendChild(text);

    // add div to the document
    if (selector !== undefined) {
        document.querySelector(selector).appendChild(tag);
    } else {
        document.body.appendChild(tag);
    }
}

/**
 * This function returns a DOM hook to an element
 * @param {string} type
 * @param {string} name
 * @return DOM hook
 */
function getBy(type, name) {
    switch (type) {
    case 'class': 
        return document.getElementsByClassName(name);
    case 'id':
        return document.getElementById(name);
    case 'tag':
        return document.getElementsByTagName(name);
    default:
        break;
    }
}

/**
 * Using 'selector' (jQuery-like) returns DOM hook
 * for manipulating the element(s) attached
 * @param {string} selector
 * @return DOM hook
 */
function getHook(selector) {
    return document.querySelector(selector);
}

/**
 * Shorcut function to perform a loop.
 * @param {number} cnt
 * @param {number} max
 * @param {function} fn
 * @retrun none
 */
function loop(cnt, max, fn) {
    while (cnt < max) {
        fn(cnt);
        cnt += 1;
    }
}

/**
 * Triggers an event of type
 * @param {DOM hook} ptr
 * @param {string} type
 * @return none
 */
function trigger(ptr, type) {
    ptr.dispatchEvent(new Event(type));
}

/**
 * Adds an event listener to a DOM hook and attaches callback function
 * @param {DOM hook} ptr
 * @param {string} type
 * @param {function} fn
 * @return none
 */
function listen(ptr, type, fn) {
    if (ptr !== null) {
        ptr.addEventListener(type, fn);
    }
}

/**
 * Shortcut function to add click event
 * @param {DOM hook} ptr
 * @param {function} fn
 * @return none
 * @uses listen()
 */
function addClick(ptr, fn) {
    listen(ptr, 'click', fn);
}

/**
 * Based on 'addIt' variable adds/removes a class to a DOM element
 * @param {DOM hook} ptr
 * @param {string} name
 * @param {boolean} addIt (control)
 * @return none
 */
function addClass(ptr, name, addIt) {
    if (addIt === undefined || addIt) {
        ptr.className += ' ' + name;
    } else {
        ptr.classList.remove(name);
    }
}

/**
 * Toggle adds or removes a class 'name' from a DOM element 'ptr'
 * @param {DOM hook} ptr
 * @param {string} name
 * @return none
 */
function toggle(ptr, name) {
    ptr.classList.toggle(name);
}

/**
 * Checks to see if the selector has focus
 * @param {DOM hook} ptr
 * @return boolean
 */
function hasFocus(ptr) {
    return (document.activeElement === getHook(ptr));
} 

/**
 * Checks to see if an element has a certain class
 * @param {string} element
 * @param {string} cls
 * @return boolean
 */
function hasClass(element, cls) {
    var source = ' ' + element.className + ' ',
        target = ' ' + cls + ' ';

    return source.indexOf(target) > -1;
}

/**
 * Shortcut function to add the 'hidden' class
 * @param {string} id
 * @param {boolean} hideIt
 * @return none
 * @uses addClass()
 */
function hide(ptr, hideIt) {
    (hideIt === undefined || hideIt)
        ? addClass(ptr, 'hidden', true)
        : addClass(ptr, 'hidden', false);
}

/**
 * Waits a certain amount then performs a function
 * (note: created because time SHOULD go first!!)
 * @param {number} time
 * @param {function} fn
 * @return none
 */
function delay(time, fn) {
    setTimeout(fn, time);
}

/**
 * Performs a function at the interval 'time'
 * (note: created because time SHOULD go first!!)
 * @param {number} time
 * @param {function} fn
 * @return pointer to the setInterval (used to stop it)
 */
function repeater(time, fn) {
    var hook = setInterval(fn, time);
    return hook;
}

function stopRepeater(ptr) {
    clearInterval(ptr);
}

/**
 * @param num string
 * @param digits number
 */
function zerofill(num) {
    return (num < 10) ? '0' + num : num;
    //TODO: Add digits param to zero fill 100s,
    //      1000s, etc. Default to 10s
    // var zeros = '0',
    //     sliceCount = digits * -1;
    
    // loop(0, digits, function() {
    //     zeros += '0';
    // }); console.log(zeros);

    // (zeros + num).slice(sliceCount);
}

/**
 * Returns the text of an element OR sets the text of an element
 * based on if 'str' is defined
 * @param {DOM hook} ptr
 * @param {string} str
 * @return string
 */
function html(ptr, str) {
    if (str === undefined) {
        return ptr.innerHTML;
    } else {
        ptr.innerHTML = str;
    }
}

/**
 * Returns the value of an input OR sets the value of an input
 * based on if 'str' is defined
 * @param {DOM hook} ptr
 * @param {string} str
 * @return string
 */
function value(ptr, str) {
    if (str === undefined) {
        return ptr.value;
    } else {
        ptr.value = str;
    }
}

/**
 * Returns the index of a string (str) if it
 * is in the array (arr)
 * @param {array} arr
 * @param {string} str
 * @return number
 */
function getIdx(arr, str) {
    return arr.indexOf(str);
}