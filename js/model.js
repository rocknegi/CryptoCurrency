app.factory("myFactory", ($http, $q) => {
    var object = {

        get() {
            var pr = $q.defer();
            var url = "https://api.coinmarketcap.com/v1/ticker/";
            $http.get(url).then(function (data) {
                pr.resolve(data.data);
                
            }, function (err) {
                pr.reject(err);
            });
            return pr.promise;
        }


    }

    return object;
});
