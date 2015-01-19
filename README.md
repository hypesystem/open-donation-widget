**open-donation-widget** is a simple HTML/Javascript widget that allows you to easily show where the money being donated is going.
It leaves styling to the end-user (but there are plans to add some default styles for popular frontend frameworks).
There are also plans to add support for popular backend frameworks, to make it easily integratable.

Installing
==========

open-donation-widget is meant to be used in the browser.
The easiest way to do so, is to grab a build in the `build/` folder, and reference it from your website:

```
<script src="open-donation-widget-0.0.0.js"></script>
```

This will allow all following scripts to access `OpenDonationForm`.
This object is instantiated with two DOM elements: the input field, and the are in which to output.
The third argument is an options-object.
The options are as follows:

- `moneyHandlers`: An array of objects with `name`, `percentage` (optional), and `fee` (optional).
  These describe someone who may take an amount of the money as it passes through the system.

```javascript
var input = document.querySelectorAll("input[type=number]")[0];
var output = document.querySelectorAll("#output")[0];
var form = new OpenDonationForm(input, output, {
    moneyHandlers: [
        { name: "Payments Provider", percentage: 5, fee: 0.25 },
        { name: "Platform",          percentage: 2, fee: 0    },
        { name: "Creator"                                     }
    ]
});
```

The result is a nice little info-bit about where the money went.

![screenshot of example](http://i.imgur.com/APRTS7R.png)

### Dependencies

This library strives to have as few dependencies as possible, while still making integrations easy.
It should be possible to rely on no other libraries, and this is the goal.

- underscore

License
=======

Copyright (c) 2014 Niels Roesen Abildgaard <me@hypesystem.dk>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
