/**
 *  Proxy is a wrapper or agent object that is being called by the client
 *  to access the real serving object behind the scenes.
 *  Use of the proxy can simply be forwarding to the real object,
 *  or can provide additional logic.
 */

// Fake External API
class CryptocurrencyAPI {
  constructor() {
    this.getValue = (coin) => {
      console.log('API Call');
      switch (coin) {
        case 'Bitcoin':
          return 'Bitcoin is: 21674$';
        case 'Litecoin':
          return 'Litecoin is: 54$';
        case 'Ethereum':
          return 'Ethereum is: 1500$';
        default:
          break;
      }
    };
  }
}

// Initiate API Object
const api = new CryptocurrencyAPI();

// Calls
console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Litecoin'));
console.log(api.getValue('Ethereum'));

// Proxy Object
class CryptocurrencyProxy {
  constructor() {
    // Get API Instance to Talk
    this.api = new CryptocurrencyAPI();

    // Fake Cache (extra functionality between us and API)
    this.cache = {};

    this.getValue = (coin) => {
      // If value is not in cache
      if (this.cache[coin] == null) {
        // Store it
        this.cache[coin] = this.api.getValue(coin);
      }
      // Coin is already in our cache, just return it
      return this.cache[coin];
    };
  }
}

// Initiate Proxy Object
const proxy = new CryptocurrencyProxy();

// API Request through Proxy
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));
