document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalVideo = document.getElementById("modalVideo");
    const videoSource = document.getElementById("videoSource");
    const closeModal = document.getElementById("closeModal");

    let galleryItems = [];
    let currentIndex = 0;

    function resetModal() {
        modalImage.style.display = "none";
        modalVideo.style.display = "none";
        modalImage.src = "";
        videoSource.src = "";
        modalVideo.pause();
    }

    function showItem(index) {
        resetModal();
        const item =
            galleryItems[index];
        if (item.type === "image") {
            modalImage.style.display =
                "block";
            modalImage.src =
                item.src;
        }

        if (item.type === "video") {
            modalVideo.style.display =
                "block";
            videoSource.src =
                item.src;
            modalVideo.load();
        }
    }

    /* OPEN IMAGE */
    window.openImage = function (src) {
        galleryItems = [{
            type: "image",
            src: src
        }];
        currentIndex = 0;
        modal.style.display = "flex";
        showItem(currentIndex);
    }

    /* OPEN VIDEO */
    window.openVideo = function (src) {
        galleryItems = [{
            type: "video",
            src: src
        }];
        currentIndex = 0;
        modal.style.display = "flex";
        showItem(currentIndex);
    }

    /* OPEN GALLERY MIX */
    window.openGallery = function (items) {
        galleryItems = items;
        currentIndex = 0;
        modal.style.display = "flex";
        showItem(currentIndex);
    }

    /* NEXT */
    window.nextImage = function () {
        currentIndex++;
        if (currentIndex >=
            galleryItems.length) {
            currentIndex = 0;
        }
        showItem(currentIndex);
    }

    /* PREV */
    window.prevImage = function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex =
                galleryItems.length - 1;
        }
        showItem(currentIndex);
    }

    /* CLOSE */
    closeModal.onclick = function () {
        modal.style.display =
            "none";
        resetModal();
    }

    window.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display =
                "none";
            resetModal();
        }
    }
});