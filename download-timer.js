jQuery(document).ready(function($) {
    var downloadTimer = $('#download-timer');
    var seconds = parseInt(downloadTimer.data('seconds'));
    var fileUrl = downloadTimer.data('file-url');

    function startDownload() {
        window.location.href = fileUrl;
    }

    function updateTimer() {
        if (seconds <= 0) {
            clearInterval(timerInterval);
            startDownload();
        } else {
            downloadTimer.text(seconds);
            seconds--;
        }
    }

    var timerInterval = setInterval(updateTimer, 1000);
});
