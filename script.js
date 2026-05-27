document.addEventListener("DOMContentLoaded", () => {

    const modal =
    document.getElementById("projectModal");

    const modalImage =
    document.getElementById("modalImage");

    const modalVideo =
    document.getElementById("modalVideo");

    const videoSource =
    document.getElementById("videoSource");

    const closeModal =
    document.getElementById("closeModal");

    /* RESET */
    function resetModal(){

        modalImage.style.display = "none";
        modalVideo.style.display = "none";

        modalVideo.pause();

        modalImage.src = "";
        videoSource.src = "";
    }

    /* OPEN IMAGE */
    window.openImage = function(src){

        resetModal();

        modal.style.display = "flex";

        modalImage.style.display = "block";
        modalImage.src = src;
    }

    /* OPEN VIDEO */
    window.openVideo = function(src){

        resetModal();

        modal.style.display = "flex";

        modalVideo.style.display = "block";

        videoSource.src = src;
        modalVideo.load();
    }

    /* CLOSE BUTTON */
    closeModal.onclick = function(){

        modal.style.display = "none";
        resetModal();
    }

    /* CLICK OUTSIDE */
    window.onclick = function(e){

        if(e.target === modal){
            modal.style.display = "none";
            resetModal();
        }
    }

});