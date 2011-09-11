require({
  paths: {
    jade: '../../jade'
  }
}, ['jade!views/welcome'], function(welcomeView){
  main = document.getElementById('main')
  main.innerHTML = welcomeView();
});
