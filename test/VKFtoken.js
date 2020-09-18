const { isMainThread } = require("worker_threads");
const assert = require('assert');

const VKFtoken = artifacts.require('VKFtoken');

contract("VKFtoken", accounts => {
    it("should put 1470000000 VKFtoken in the first account", () => 
        VKFtoken.deployed()
        .then( instance => {
                return instance.balanceOf.call(accounts[0]);
            }
        )
        .then(balance => {
            assert.equal(
                balance.valueOf(),
                1470000000 * (10 ** 18),
                "1470000000 wasn't in the first account"
            )
        })
    );

    it( "has a name 'VKFtoken' ", () => 
        VKFtoken.deployed()
        .then( instance => {
                return instance.name.call();
            }
        )
        .then(name => {
            assert.equal(name,"VKFtoken","name is not VKFtoken");
        })
    );

    it( "has a symbol 'vkf' ", () => 
        VKFtoken.deployed()
        .then( instance => {
                return instance.symbol.call();
            }
        )
        .then(symbol => {
            assert.equal(symbol,"vkf","symbol is not vkf");
        })
    );

    it( "decimals is 18 ", () => 
        VKFtoken.deployed()
        .then( instance => {
                return instance.decimals.call();
            }
        )
        .then(decimals => {
            assert.equal(decimals,18,"decimals is not 18");
        })
    );
})