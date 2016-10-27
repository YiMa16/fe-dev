(function() {

  document.getElementById("button1").onclick = function(e) {
    e.stopPropagation();
    console.log("button")
    $('#modal-bg').removeClass('invisible');
  };

  $('#modal-bg').on('click', function(e) {
    e.stopPropagation();
    if (e.target.id !== 'modal-bg') {
        return;
    }
    $('#modal-bg').addClass('invisible');
});

  angular.module('myApp', [])
    .directive('progressBar', function(){
      return {
        restrict: 'EA',
        template:`
        <div class="progressbar-wrapper">
          <span class="progressbar-line-outer">
          </span>
        </div>
        `,
        link: function(scope,elem, attrs) {
          console.log('hello');
          console.log(elem);
          var line = elem.find('span');
          console.log(line);
          scope.$watch('progress', function(newVal, oldVal) {
            line.css('width', (newVal/attrs.max*100)+'%');
          });
        }
      }
    });
})();
