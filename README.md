# Web Localization
Ideally Implemented simple web user-language localization example.

> The example doesn't work in the local environment.

## Useble

The following describes how to define the contents of the json files within the localizations folder, <br />
And this example json file is `korean.json` provided by default.

> How to define parameters is by inserting {`index`} to content `json value`.

```json
{
    "undefined": "정의되지 않음",
    "hello": "안녕하세요",
    "amount": "{0}개"
}
```

And next, it describes how to output localized sentences and words defined in the json content by declaring html elements.
```html
<!-- Sentences and words -->
<localization-element key="hello"></localization-element>

<!-- Place holder, (flexible localizable) -->
<localization-element key="amount", parms="123"></localization-element>
```

## How to customizing

The following describes how to redefine custom-element name.
```js
customElements.define('localization-element', LocalizationElement);
```
