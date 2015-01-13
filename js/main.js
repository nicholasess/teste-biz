$(function(){
  $('#mesa_desc').text("Mesa "+localStorage.getItem('mesa'));
  window.urlServer = "";
  if(localStorage.getItem('ip')){
    window.urlServer = 'http://'+localStorage.getItem('ip')+'/admin/API/baixa/';  
  }else{
    location.replace("add_server.html?msg=1");
  }
});

