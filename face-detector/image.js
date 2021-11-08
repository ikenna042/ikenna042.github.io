const loadFile = function(event) {
    const image = document.getElementById('image');
    image.src = URL.createObjectURL(event.target.files[0]);
};

const detect = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('./models');
    
    // const image = document.querySelector('img');
    const canvas = faceapi.createCanvasFromMedia(image);
    const detection = await faceapi.detectAllFaces(image);

    const dimensions = {
        width: image.width,
        height: image.height
    };

    const resizedDimensions = faceapi.resizeResults(detection, dimensions);

    document.body.append(canvas);

    faceapi.draw.drawDetections(canvas, resizedDimensions);
}