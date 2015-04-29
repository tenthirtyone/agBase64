# agBase64
AngularJS Module that provides Base64 Encode/Decode filters

# Installation

Include the 'agBase64' module in app.js
```
angular.module('app', ['agBase64']);
```

Include agBase64.js on your index.html
```
<script src="agBase64.js"></script>
```

# Usage

```
{{'I am demo text' | base64Encode}}

{{'SSBhbSBkZW1vIHRleHQ=' | base64Decode}}
```