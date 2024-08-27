<div align="center">
    <img src="https://github.com/user-attachments/assets/f1d4902f-93a8-48ca-81fc-4f1b6d190eb5">
    <h1>Web Localization</h1>
    <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v1.0.0-dev</th>
          </tr>
        </tbody>
    </table>
</div>

Ideally Implemented simple web user-language localization example.

> [!WARNING]
> The example doesn't work in the local environment, And i'll be renewing <br>this package for the better soon.

> You can use `server-side rendering` and `service worker` to resolve lazy load issues.

## Usage

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

<!-- Use place holder, (flexible localizable way) -->
<localization-element key="amount" parms="123"></localization-element>
```

## How to define language you want
Declares a global and statically variable called language

> The value defined must be the name of the json file.
> 
```js
// This value is the current language name(json name) to be applied.
const language = 'korean';
```

### Reason
This is basically because it always refers to a variable called `language`.

![sdfsfdsfs](https://github.com/MTtankkeo/web_localization/assets/122026021/afaa47f3-1c57-440b-9d01-5d758494d59c)

## How to customizing

The following describes how to redefine custom-element name.

> `-` must be included in element name.

```js
// Define the first argument of customElements.define with the name you want.
customElements.define('localization-element', LocalizationElement);
```
