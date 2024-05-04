const pngFileInput = document.getElementById('png-file');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', () => {
  const file = pngFileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    const image = new Image();

    image.addEventListener('load', () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);

      canvas.toBlob((blob) => {
        const webpUrl = URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.style.display = 'none';
        downloadLink.href = webpUrl;
        downloadLink.download = 'WebP-converted-by-TutorialGTP.webp';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        window.URL.revokeObjectURL(webpUrl);
        document.body.removeChild(downloadLink);
      }, 'image/webp', 1);
    });

    image.src = reader.result;
  });

  reader.readAsDataURL(file);
});
