angular.module('flowApp.controllers')
    .controller('HomeCtrl', function($q, $scope, $state, $ionicLoading, Api, Detail) {

    	var apiCall=function(caller,word){
    		console.log(caller);
            var callback = function(err, result) {
                if (err)
                    alert(err);
                else {
                    console.log(result);
                    Detail.set(result);
                    $state.go('tab.detail');
                }
            }
            Api.get(caller,word,callback);
    	}

        
        $scope.definition = function(){
            var word = document.getElementById("word").value;
            apiCall('def',word);
        }
        $scope.synonyms = function(){
            var word = document.getElementById("word").value;
        	apiCall('syn',word);
        }
        $scope.antonyms = function(){
            var word = document.getElementById("word").value;
        	apiCall('ant',word);
        }
        $scope.examples = function(){
            var word = document.getElementById("word").value;
        	apiCall('ex',word);
        }
        $scope.full_dict = function(){
            var word = document.getElementById("word").value;
        	apiCall('full_dict',word);
        }

    })
