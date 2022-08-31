let titleOne = document.querySelector(".title-1")
let titleTwo = document.querySelector(".title-2")
let titleThree = document.querySelector(".title-3")
let titleFour = document.querySelector(".title-4")
let titleFive = document.querySelector(".title-5")
let titleSix = document.querySelector(".title-6")
let contentOne = document.querySelector(".content-1")
let contentTwo = document.querySelector(".content-2")
let contentTree = document.querySelector(".content-3")
let contentFour = document.querySelector(".content-4")
let contentFive = document.querySelector(".content-5")
let contentSix = document.querySelector(".content-6")

titleOne.addEventListener("click", function () {
    if (contentOne.classList.contains("visible")) {
        contentOne.classList.remove("visible")
    }else {
        contentOne.classList.add("visible")
    }
})
titleTwo.addEventListener("click", function () {
    if (contentTwo.classList.contains("visible")) {
        contentTwo.classList.remove("visible")
    }else {
        contentTwo.classList.add("visible")
    }
})
titleThree.addEventListener("click", function () {
    if (contentTree.classList.contains("visible")) {
        contentTree.classList.remove("visible")
    }else {
        contentTree.classList.add("visible")
    }
})
titleFour.addEventListener("click", function () {
    if (contentFour.classList.contains("visible")) {
        contentFour.classList.remove("visible")
    }else {
        contentFour.classList.add("visible")
    }
})
titleFive.addEventListener("click", function () {
    if (contentFive.classList.contains("visible")) {
        contentFive.classList.remove("visible")
    }else {
        contentFive.classList.add("visible")
    }
})
titleSix.addEventListener("click", function () {
    if (contentSix.classList.contains("visible")) {
        contentSix.classList.remove("visible")
    }else {
        contentSix.classList.add("visible")
    }
})