const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e){
    span.classList.add('animate__animated', 'animate__rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function(e){
    span.classList.remove('animate__animated', 'animate__rubberBand')
}))

// $(document).ready(function(){
//     var skillset = {
//     "languages": [
//         {
//           "name": "JavaScript",
//           "skill": 3
//         },
//         {
//           "name": "HTML",
//           "skill": 4
//         },
//         {
//           "name": "CSS",
//           "skill": 3
//         },
//         {
//           "name": "C#",
//           "skill": 1
//         }
//       ],
//     "frameworks": [
//         {
//           "name": "jQuery",
//           "skill": 4
//         },
//         {
//           "name": "Handlebars",
//           "skill": 1
//         },
//         {
//           "name": "Bootstrap",
//           "skill": 4
//         },
//         {
//           "name": "Sass",
//           "skill": 3
//         },
//         {
//           "name": "NodeJS",
//           "skill": 2
//         },
//         {
//           "name": "Express",
//           "skill": 1
//         },
//       ],
//             "tools": [
//                 {
//                   "name": "ChromeDevTools",
//                   "skill": 4
//                 },
//                 {
//                   "name": "Atom",
//                   "skill": 4
//                 },
//                 {
//                   "name": "Photoshop",
//                   "skill": 4
//                 },
//                 {
//                   "name": "Git",
//                   "skill": 2
//                 }
//       ]
//     }
    
    
    
//     for(var i in skillset.languages){
//        var percent=(skillset.languages[i].skill*100)/5
//       var str='<div class="skillbar-container"><div class="skillbar" style="background: #000;" data-percent="'+percent+'%"><li>'+skillset.languages[i].name+'</div></div></li>';
//        $(str).appendTo($('.languages'));
//     }
      
//     for(var i in skillset.frameworks){
//        var percent=(skillset.frameworks[i].skill*100)/5
//       var str='<div class="skillbar-container"><div class="skillbar" style="background: #000;" data-percent="'+percent+'%"><li>'+skillset.frameworks[i].name+'</div></div></li>';
//        $(str).appendTo($('.frameworks'));
//     }  
    
//     for(var i in skillset.tools){
//     var percent=(skillset.tools[i].skill*100)/5
//     var str='<div class="skillbar-container"><div class="skillbar" style="background: #000;" data-percent="'+percent+'%"><li>'+skillset.tools[i].name+'</div></div></li>';
//     $(str).appendTo($('.tools'));
//     }
//       $('.skillbar').each(function(){
//         $(this).animate({
//             width:$(this).attr('data-percent')
//         },1500);
//     });
//     })

var about = document.getElementById("about");

window.addEventListener('scroll',function(){
  
    //skillbar animation
    document.querySelectorAll(".skill-progress-bar.empty").forEach(function(element) {
      if(element.getBoundingClientRect().bottom <= (window.innerHeight || document.documentElement.clientHeight)){
        element.classList.remove("empty");
        element.classList.add("full");
      }
    });
    
  });


  (function() {
    var animation = document.querySelector('.equalizer');
    
    function onAnimation( evt ) {
      evt.stopPropagation();
    }
    
    animation.addEventListener('webkitAnimationStart', onAnimation, false);
    animation.addEventListener('webkitAnimationIteration', onAnimation, false);
    animation.addEventListener('animationStart', onAnimation, false);
    animation.addEventListener('animationIteration', onAnimation, false);
  }());