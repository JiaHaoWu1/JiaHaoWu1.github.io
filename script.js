// 获取模态框元素
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");

// 点击图片打开模态框
function enlargeImage(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
}

// 点击模态框的关闭按钮或模态框背景关闭模态框
function closeModal() {
    modal.style.display = "none";
}

// 点击模态框内容本身不会关闭，只有点击背景或关闭按钮才关闭
modalImg.onclick = function(event) {
    event.stopPropagation(); // 阻止事件冒泡
}
