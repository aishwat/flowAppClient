angular.module('flowApp.services', [])
    .factory('Api', function($http) {
        return {
            get: function(caller, word, callback) {
                if (word === "" && caller != "full_dict") {
                    console.log('in word null');
                    alert("please enter a word");
                } else {
                    var url = "http://localhost:3000/" + caller + "/" + word; //later
                    // var config = {
                    //     headers: {
                    //         'Accept': 'application/json'
                    //     },
                    //     params: {
                    //         COMMAND: 'STOREFILTERRESULTS',
                    //         version: '2.0',
                    //         latitude: latLng.lat(),
                    //         longitude: latLng.lng(),
                    //         storefiltertype: 'ALL',
                    //         storeqty: '5'
                    //     },
                    //     timeout: 15000 //check later
                    // };
                    $http.get(url).then(function(resp) {
                        //console.log(JSON.stringify(resp));
                        if (resp.status == 200) {
                            callback(null, resp.data);
                            console.log('callback executed');
                        } else
                            callback('Response not 200 ' + resp.status);
                    }, function(err) {
                        console.log(err);
                        callback('Something Went Wrong ' + err);

                    });
                }
            }
        };
    })
    .factory('Detail', function() {
        var data;
        return {
            get: function() {
                return data;
            },
            set: function(_data) {
                data = _data;
            }
        };

    });
