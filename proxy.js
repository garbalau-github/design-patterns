/**
 *  Proxy is a wrapper or agent object that is being called by the client
 * to access the real serving object behind the scenes.
 * Use of the proxy can simply be forwarding to the real object,
 * or can provide additional logic.
 */

// External API (Simulation)
function CryptocurrencyAPI() {
  this.getValue = function (coin) {
    console.log('-- api call --');
    switch (coin) {
      case 'Bitcoin':
        return 'Bitcoin is: 38500$';
      case 'Litecoin':
        return 'Litecoin is: 100$';
      case 'Ethereum':
        return 'Ethereum is: 2800$';
      default:
        break;
    }
  };
}

// Calls to API
const api = new CryptocurrencyAPI();

// console.log(api.getValue('Bitcoin'));
// console.log(api.getValue('Litecoin'));
// console.log(api.getValue('Ethereum'));

// Proxy
function CryptocurrencyProxy() {
  // Talk to API (maintain its own instance)
  this.api = new CryptocurrencyAPI();

  // Our cache (extra functionality, in between us and API)
  this.cache = {};

  this.getValue = function (coin) {
    if (this.cache[coin] == null) {
      // Retrieve it
      this.cache[coin] = this.api.getValue(coin);
    }
    // Coin is already in our cache
    return this.cache[coin];
  };
}

const proxy = new CryptocurrencyProxy();

// Making an API request through our proxy
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));

// This ones are from cache (proxy)
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));
