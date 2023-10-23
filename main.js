// AJUSTAR A CAMERA E ACIONAR
        //Webcam.set função predefinida para a visualização ao vivo da webcam
        //Webcam.snap para tirar foto
        //Webcam.attach ativa a webcam do usuário, solicita a permissão apropriada e começa a mostrar uma imagem da câmera ao vivo
Webcam.set({
  width:350,
  height:300,
  image_format : 'png',
  png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

// FUNÇÃO PARA OBTER A IMAGEM
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
// Código para verificar a versão ml5
  console.log('ml5 version:', ml5.version);
  
  // Initialize the Image Classifier method with MobileNet
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VK6X7UYHV/model.json',modelLoaded);

  // QUANDO O MODELO ESTIVER CARREGADO
  function modelLoaded() {
    console.log('Modelo Carregado!');
  }

function check(){
  img = document.getElementById('selfie_image');
  classifier.classify(img, gotResult);
}
 function gotResult( error, results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed
    (3);
 } 
}