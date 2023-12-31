function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xbC6jF4uG/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) { /* Aula 107 vai até aqui */
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('dog') 
    img1 = document.getElementById('cat')
    img2 = document.getElementById('cow')
    img3 = document.getElementById('monkey')

    if (results[0].label == "latir") {
      img.src = 'dog.gif';
      img1.src = 'cat.jpeg';
      img2.src = 'cow.png';
      img3.src = 'monkey.jpg';
    } else if (results[0].label == "miar") {
      img.src = 'dog.jpeg';
      img1.src = 'cat.gif';
      img2.src = 'cow.png';
      img3.src = 'monkey.jpg';
    } else if (results[0].label == "mugir") {
      img.src = 'dog.jpeg';
      img1.src = 'cat.jpeg';
      img2.src = 'cow.gif';
      img3.src = 'monkey.jpg';
    } else if (results[0].label == "gritar") {
      img.src = 'dog.jpeg';
      img1.src = 'cat.jpeg';
      img2.src = 'cow.png';
      img3.src = 'monkey.gif';
    }
  }
}
