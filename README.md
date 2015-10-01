# github-user-publickey
Get GitHub users PublicKey

## Install

`> npm install --save github-user-publickey`

## Usage

```js
var githubUserPublicKey = require('github-user-publickey');
githubUserPublicKey(cli.input[0], function (err, data) {
    console.log(data);
    //=>[ssh-rsa AAA....]
});
```

## CLI

`> npm install --global github-user-publickey`

```
$ github-user-publickey --help

  Example
    github-user-publickey beat
    ssh-rsa AA....
```

## License

MIT © [Chintan Radia](https://github.com/beatfreaker)
