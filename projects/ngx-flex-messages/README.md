# NgxFlexMessages
This repository is inspired by https://github.com/PamornT/flex2html

### Installation
```
npm i ngx-flex-messages --save
```

Add wanted package to NgModule imports
```
import { NgxFlexMessagesModule } from 'ngx-flex-messages';
   
  @NgModule({
    ...
    imports: [ NgxFlexMessagesModule, ... ]
    ...
  })
```

Add style to projects in `angular.json`
```
{
    ...
    "styles": [
        "../node_modules/ngx-flex-messages/assets/global.scss",
        "styles.scss" 
     ],
    ...
}
```


Add component to your page
```
<ngx-flex-messages [data]="json"></ngx-flex-messages>
```
