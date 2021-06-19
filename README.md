# NgxFlexMessages

> Unofficial Line Flex Message component using angular

<a href="https://npmjs.org/ngx-flex-messages"><img src="https://img.shields.io/npm/v/ngx-flex-messages/latest.svg" alt="npm latest version" ></a>
<a href="https://npmjs.org/ngx-flex-messages"><img src="https://img.shields.io/npm/v/ngx-flex-messages/canary.svg" alt="npm next version" ></a>

[![NPM](https://nodei.co/npm/ngx-flex-messages.png)](https://nodei.co/npm/ngx-flex-messages/)
### Installation
```
npm i ngx-flex-messages --save
```

Add wanted package to NgModule imports
```
import { NgxFlexMessagesModule } from 'ngx-flex-messages';
   
  @NgModule({
    ...
    imports: [ 
			...
			NgxFlexMessagesModule, 
			... 
		]
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
<ngx-flex-messages 
	[data]="json" 
	(action)="onClickAction($event)"
>
</ngx-flex-messages>
```

## Inspiration


[flex2html](https://github.com/PamornT/flex2html)

[Flex Message Simulator](https://developers.line.me/console/fx/)