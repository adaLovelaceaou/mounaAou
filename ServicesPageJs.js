var buttonInfo = [
    { buttonId: document.querySelector("#openModalBtn1"), contentId: document.querySelector("#myModal1") },
    { buttonId: document.querySelector("#openModalBtn2"), contentId: document.querySelector("#myModal2") },
    { buttonId: document.querySelector("#openModalBtn3"), contentId: document.querySelector("#myModal3") },
    { buttonId: document.querySelector("#openModalBtn4"), contentId: document.querySelector("#myModal4") },
    { buttonId: document.querySelector("#openModalBtn5"), contentId: document.querySelector("#myModal5") },
    { buttonId: document.querySelector("#openModalBtn6"), contentId: document.querySelector("#myModal6") }
];


// تفعيل الأحداث عند النقر على الأزرار
buttonInfo.forEach(function (info) {


    var button = document.getElementById(info.buttonId);
    var content = document.getElementById(info.contentId);

    button.onclick = function () {
        content.style.display = "block";
    };
    var span = content.querySelector(".close");
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        content.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == content) {
            content.style.display = "none";
        }
    };
});
    // أضف هنا كود الحصول على العناصر وتفعيل الأحداث


