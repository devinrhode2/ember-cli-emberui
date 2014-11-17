# Ember-cli-emberui

Adds [emberui/emberui](https://github.com/emberui/emberui) to your ember-cli app.

## Usage

Add the following entry to your package.json:

```
"ember-cli-emberui": "rebaselabs/ember-cli-emberui"
```

then:

```
npm install && ember g ember-cli-emberui
```

Now you can access `emberui` by either importing explicitly:

```
import 'emberui'
```

or importing specific modules:

```
import { EuiInputTemplate, EuiInputComponent } from 'emberui'
```

And all the componenents should be available for use in your ember-cli app.
