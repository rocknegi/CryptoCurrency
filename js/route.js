app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when("/home", {
      templateUrl: "index.html"
    })
    .when("/bitcoin", {
      templateUrl: "pages/bitcoin.html"
    })
    .when("/etherium", {
      templateUrl: "pages/etherium.html"
    })
    .when("/ripple", {
      templateUrl: "pages/ripple.html"
    })
    .when("/bitcoinCash", {
      templateUrl: "pages/bitcoinCash.html"
    })
    .when("/eos", {
      templateUrl: "pages/eos.html"
    })
    .when("/litecoin", {
      templateUrl: "pages/litecoin.html"
    })
    .when("/cardano", {
      templateUrl: "pages/cardano.html"
    })
    .when("/stellar", {
      templateUrl: "pages/stellar.html"
    })
    .when("/iota", {
      templateUrl: "pages/iota.html"
    })
    .when("/tron", {
      templateUrl: "pages/tron.html"
    })
    .otherwise({
      redirectTO: "/index.html"
    })
})
