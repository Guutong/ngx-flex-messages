import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ngx-flex-messages',
  templateUrl: './flex-messages.component.html',
  styles: [],
})
export class FlexMessagesComponent implements AfterViewInit {
  @Input('data')
  data: {
    type: string;
    altText: string;
    contents: any | {
      type: string;
      contents: any;
      header: any;
      hero: any;
      body: any;
      footer: any;
    };
  } | any;

  @ViewChild('flex')
  flex!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.flex) {
      let carousel = `
      <div class="LySlider">
        <div class="lyInner">
          <!-- inner -->
        </div>
      </div>
      <br>
      `;
      let result = '';
      
      if (this.data.type === 'flex') {
        const { contents } = this.data;
        switch (contents.type) {
          case 'bubble':
            result = bubble_object(contents);
            carousel = carousel.replace('<!-- inner -->', result); 
            break;
          case 'carousel':
            contents.contents.forEach((obj: any, index: any) => {
              let result = bubble_object(obj);
              result = result.replace('<!-- content -->', '');
              result = result.replace('<!-- inner -->', '');
              carousel = carousel.replace('<!-- inner -->', result + '<!-- inner -->');
            });
            break;
          default:
            break;
        }
      
      }
      this.flex.nativeElement.innerHTML = carousel;
    }
  }
}

function bubble_object(json: any) {
  let { hero, header, body, footer } = json;
  let hero_object = hero_struc();
  let header_object = header_struc();
  let body_object = body_struc(json);
  let footer_object = footer_struc();
  let bubble = bubble_struc(json);

  let box: any = '';
  for (let key in hero) {
    if (hero.hasOwnProperty(key)) {
      if (key === 'type' && hero[key] === 'box') {
        box = box_object(hero);
        let box_inner = box_recursive(box, hero['contents']);
        box = box_inner;
      } else {
        box = convert_object(hero);
      }
    }
  }
  hero_object = hero_object.replace('<!-- inner -->', box);

  box = '';
  for (let key in header) {
    if (header.hasOwnProperty(key)) {
      if (key === 'type' && header[key] === 'box') {
        box = box_object(header);
        let box_inner = box_recursive(box, header['contents']);
        box = box_inner;
      }
    }
  }
  header_object = header_object.replace('<!-- inner -->', box);

  box = '';
  for (let key in body) {
    if (body.hasOwnProperty(key)) {
      if (key === 'type' && body[key] === 'box') {
        box = box_object(body);
        let box_inner = box_recursive(box, body['contents']);
        box = box_inner;
      }
    }
  }
  body_object = body_object.replace('<!-- inner -->', box);

  box = '';
  for (let key in footer) {
    if (footer.hasOwnProperty(key)) {
      if (key === 'type' && footer[key] === 'box') {
        box = box_object(footer);
        let box_inner = box_recursive(box, footer['contents']);
        box = box_inner;
      }
    }
  }
  footer_object = footer_object.replace('<!-- inner -->', box);

  bubble = bubble.replace('<!-- hero -->', hero_object);
  bubble = bubble.replace('<!-- header -->', header_object);
  bubble = bubble.replace('<!-- body -->', body_object);
  bubble = bubble.replace('<!-- footer -->', footer_object);

  return bubble;
}

function box_recursive(parent_box: string, json: any) {
  let result: any[] = [];
  json.forEach((obj: any, index: any) => {
    let temp;
    if (obj['type'] === 'box') {
      let temp2 = box_object(obj);
      temp = box_recursive(temp2, obj['contents']);
    } else if (
      obj['type'] === 'text' &&
      obj['contents'] &&
      obj['contents'].length > 0
    ) {
      let temp2 = convert_object(obj);
      temp = box_recursive(temp2 || '', obj['contents']);
    } else {
      temp = convert_object(obj);
    }
    result[index] = temp;
  });

  json.forEach((obj: any, index: any) => {
    result[index] = result[index].replace('<!-- content -->', '');
    parent_box = parent_box.replace('<!-- content -->', result[index] + '<!-- content -->');
  });  
  return parent_box;
}

function convert_object(json: any) {
  let object;
  switch (json['type']) {
    case 'image':
      object = image_object(json);
      break;
    case 'icon':
      object = icon_object(json);
      break;
    case 'text':
      object = text_object(json);
      break;
    case 'span':
      object = span_object(json);
      break;
    case 'button':
      object = button_object(json);
      break;
    case 'filler':
      object = filler_object(json);
      break;
    case 'spacer':
      object = spacer_object(json);
      break;
    case 'separator':
      object = separator_object(json);
      break;
    default:
      object = null;
  }
  return object;
}

function box_object(json: any) {
  let layout1 = '';
  let layout2 = '';
  let style = '';
  let {
    layout,
    position,
    flex,
    spacing,
    margin,
    width,
    height,
    backgroundColor,
    borderColor,
    borderWidth,
    cornerRadius,
    justifyContent,
    alignItems,
    offsetTop,
    offsetBottom,
    offsetStart,
    offsetEnd,
    paddingAll,
    paddingTop,
    paddingBottom,
    paddingStart,
    paddingEnd,
    background,
  } = json;
  if (layout === 'baseline') {
    layout1 = 'hr';
    layout2 = 'bl';
  } else if (layout === 'horizontal') {
    layout1 = 'hr';
    layout2 = '';
  } else if (layout === 'vertical') {
    layout1 = 'vr';
    layout2 = '';
  }
  let fl = '';
  if (flex > 3) {
    style += `-webkit-box-flex:${flex};flex-grow:${flex};`;
  } else {
    fl = flex >= 0 ? `fl${flex}` : '';
  }
  let exabs = position === 'absolute' ? 'ExAbs' : '';
  let spc = '';
  if (spacing && spacing.indexOf('px') >= 0) {
    spc = '';
  } else {
    spc = spacing ? 'spc' + upperalldigit(spacing) : '';
  }

  let exmgn;
  if (margin && margin.indexOf('px') >= 0) {
    style += `margin-top:${margin};`;
    exmgn = '';
  } else {
    exmgn = margin ? 'ExMgnT' + upperalldigit(margin) : '';
  }
  if (width && width !== '') {
    style += `width:${width};`;
  }
  if (height && height !== '') {
    style += `height:${height};`;
  }
  if (backgroundColor) {
    style += `background-color:${backgroundColor} !important;`;
  }
  if (borderColor) {
    style += `border-color:${borderColor} !important;`;
  }

  let ExBdr = '';
  if (borderWidth && borderWidth.indexOf('px') >= 0) {
    style += `border-width:${borderWidth};`;
    ExBdr = '';
  } else {
    switch (borderWidth) {
      case 'none':
        ExBdr = 'ExBdrWdtNone';
        break;
      case 'light':
        ExBdr = 'ExBdrWdtLgh';
        break;
      case 'normal':
        ExBdr = 'ExBdrWdtNml';
        break;
      case 'medium':
        ExBdr = 'ExBdrWdtMdm';
        break;
      case 'semi-bold':
        ExBdr = 'ExBdrWdtSbd';
        break;
      case 'bold':
        ExBdr = 'ExBdrWdtBld';
        break;
      default:
        ExBdr = '';
      // code block
    }
  }
  let ExBdrRad = '';
  if (cornerRadius && cornerRadius.indexOf('px') >= 0) {
    style += `border-radius:${cornerRadius};`;
    ExBdrRad = '';
  } else {
    ExBdrRad = cornerRadius ? 'ExBdrRad' + upperalldigit(cornerRadius) : '';
  }

  let jfc = '';
  if (justifyContent && justifyContent !== '') {
    switch (justifyContent) {
      case 'center':
        jfc = 'itms-jfcC';
        break;
      case 'flex-start':
        jfc = 'itms-jfcS';
        break;
      case 'flex-end':
        jfc = 'itms-jfcE';
        break;
      case 'space-between':
        jfc = 'itms-jfcSB';
        break;
      case 'space-around':
        jfc = 'itms-jfcSA';
        break;
      case 'space-evenly':
        jfc = 'itms-jfcSE';
        break;
      default:
        jfc = '';
      // code block
    }
  }
  let alg = '';
  if (alignItems && alignItems !== '') {
    switch (alignItems) {
      case 'center':
        alg = 'itms-algC';
        break;
      case 'flex-start':
        alg = 'itms-algS';
        break;
      case 'flex-end':
        alg = 'itms-algE';
        break;
      default:
        alg = '';
      // code block
    }
  }
  let ext = '';
  if (offsetTop && offsetTop.indexOf('px') >= 0) {
    style += `top:${offsetTop};`;
    ext = '';
  } else {
    ext = offsetTop ? 'ExT' + upperalldigit(offsetTop) : '';
  }
  let exb = '';
  if (offsetBottom && offsetBottom.indexOf('px') >= 0) {
    style += `bottom:${offsetBottom};`;
    exb = '';
  } else {
    exb = offsetBottom ? 'ExB' + upperalldigit(offsetBottom) : '';
  }
  let exl = '';
  if (offsetStart && offsetStart.indexOf('px') >= 0) {
    style += `left:${offsetStart};`;
    exl = '';
  } else {
    exl = offsetStart ? 'ExL' + upperalldigit(offsetStart) : '';
  }
  let exr = '';
  if (offsetEnd && offsetEnd.indexOf('px') >= 0) {
    style += `right:${offsetEnd};`;
    exr = '';
  } else {
    exr = offsetEnd ? 'ExR' + upperalldigit(offsetEnd) : '';
  }

  let ExPadA = '';
  if (paddingAll && paddingAll.indexOf('px') >= 0) {
    style += `padding:${paddingAll};`;
    ExPadA = '';
  } else {
    ExPadA = paddingAll ? 'ExPadA' + upperalldigit(paddingAll) : '';
  }

  let ExPadT = '';
  if (paddingTop && paddingTop.indexOf('px') >= 0) {
    style += `padding-top:${paddingTop};`;
    ExPadT = '';
  } else {
    ExPadT = paddingTop ? 'ExPadT' + upperalldigit(paddingTop) : '';
  }

  let ExPadB = '';
  if (paddingBottom && paddingBottom.indexOf('px') >= 0) {
    style += `padding-bottom:${paddingBottom};`;
    ExPadB = '';
  } else {
    ExPadB = paddingBottom ? 'ExPadB' + upperalldigit(paddingBottom) : '';
  }

  let ExPadL = '';
  if (paddingStart && paddingStart.indexOf('px') >= 0) {
    style += `padding-left:${paddingStart};`;
    ExPadL = '';
  } else {
    ExPadL = paddingStart ? 'ExPadL' + upperalldigit(paddingStart) : '';
  }

  let ExPadR = '';
  if (paddingEnd && paddingEnd.indexOf('px') >= 0) {
    style += `padding-right:${paddingEnd};`;
    ExPadR = '';
  } else {
    ExPadR = paddingEnd ? 'ExPadR' + upperalldigit(paddingEnd) : '';
  }

  let centerPosition = '';
  if (background && background.type === 'linearGradient') {
    centerPosition = background.centerPosition
      ? background.centerPosition
      : '50%';
    if (background.centerColor) {
      style += `background: linear-gradient(${background.angle}, ${background.startColor} 0%, ${background.centerColor} ${centerPosition}, ${background.endColor} 100%);`;
    } else {
      style += `background: linear-gradient(${background.angle}, ${background.startColor} 0%, ${background.endColor} 100%);`;
    }
  }

  return `<div class="MdBx ${layout1} ${layout2} ${fl} ${exabs} ${exmgn} ${spc} ${ExBdr} ${ExBdrRad} ${jfc} ${alg} ${ext} ${exb} ${exl} ${exr} ${ExPadA} ${ExPadT} ${ExPadB} ${ExPadL} ${ExPadR}" style="${style}"><!-- content --></div>`;
}

function button_object(json: any) {
  let style2 = '';
  let style3 = '';

  let {
    flex,
    margin,
    position,
    height,
    style,
    color,
    gravity,
    adjustMode,
    offsetTop,
    offsetBottom,
    offsetStart,
    offsetEnd,
    action,
  } = json;

  let fl = '';
  if (flex > 3) {
    style2 += `-webkit-box-flex:${flex};flex-grow:${flex};`;
  } else {
    fl = flex >= 0 ? `fl${flex}` : '';
  }
  let exabs = position === 'absolute' ? 'ExAbs' : '';
  let exmgn = '';
  if (margin && margin.indexOf('px') >= 0) {
    style2 += `margin-top:${margin};`;
    exmgn = '';
  } else {
    exmgn = margin ? 'ExMgnT' + upperalldigit(margin) : '';
  }

  height =
    !height || height === '' || height === 'md'
      ? ''
      : 'Ex' + upperalldigit(height);
  let grv =
    gravity === 'bottom' || gravity === 'center'
      ? 'grv' + upper1digit(gravity)
      : '';

  let ExBtn = 'ExBtnL';
  let ExBtnfc = '';
  if (style && style !== '') {
    switch (style) {
      case 'link':
        ExBtnfc = 'ExBtnL';
        break;
      case 'primary':
        ExBtn = 'ExBtn1';
        break;
      case 'secondary':
        ExBtn = 'ExBtn2';
        break;
      default:
        ExBtn = 'ExBtnL';
      // code block
    }
  }

  if (color) {
    style3 += `background-color:${color} !important;`;
  }

  let ext = '';
  if (offsetTop && offsetTop.indexOf('px') >= 0) {
    style2 += `top:${offsetTop};`;
    ext = '';
  } else {
    ext = offsetTop ? 'ExT' + upperalldigit(offsetTop) : '';
  }

  let exb = '';
  if (offsetBottom && offsetBottom.indexOf('px') >= 0) {
    style2 += `bottom:${offsetBottom};`;
    exb = '';
  } else {
    exb = offsetBottom ? 'ExB' + upperalldigit(offsetBottom) : '';
  }

  let exl = '';
  if (offsetStart && offsetStart.indexOf('px') >= 0) {
    style2 += `left:${offsetStart};`;
    exl = '';
  } else {
    exl = offsetStart ? 'ExL' + upperalldigit(offsetStart) : '';
  }

  let exr = '';
  if (offsetEnd && offsetEnd.indexOf('px') >= 0) {
    style2 += `right:${offsetEnd};`;
    exr = '';
  } else {
    exr = offsetEnd ? 'ExR' + upperalldigit(offsetEnd) : '';
  }

  action = !action ? { type: 'none' } : action;
  if (action.type === 'uri') {
    return `<div class="MdBtn ${ExBtn} ${height} ${fl} ${exabs} ${exmgn} ${grv} ${ext} ${exb} ${exl} ${exr}" style="${style2}" id="8d1efea2-4017-4c89-8931-98a5f4f141f2"><a href="${action.uri}" target="_blank" style="${style3}"><div>${action.label}</div></a></div>`;
  } else if (action.type === 'message') {
    return `<div class="MdBtn ${ExBtn} ${height} ${fl} ${exabs} ${exmgn} ${grv} ${ext} ${exb} ${exl} ${exr}" style="${style2}" id="8d1efea2-4017-4c89-8931-98a5f4f141f2"><a onclick="alert('message: ${action.text}')" style="${style3}"><div>${action.label}</div></a></div>`;
  } else if (action.type === 'postback') {
    return `<div class="MdBtn ${ExBtn} ${height} ${fl} ${exabs} ${exmgn} ${grv} ${ext} ${exb} ${exl} ${exr}" style="${style2}" id="8d1efea2-4017-4c89-8931-98a5f4f141f2"><a onclick="alert('postback data: ${action.data}')" style="${style3}"><div>${action.label}</div></a></div>`;
  } else {
    return `<div class="MdBtn ${ExBtn} ${height} ${fl} ${exabs} ${exmgn} ${grv} ${ext} ${exb} ${exl} ${exr}" style="${style2}" id="8d1efea2-4017-4c89-8931-98a5f4f141f2"><a style="${style3}"><div>${action.label}</div></a></div>`;
  }
}

function filler_object(json: any) {
  let style = '';
  let { flex } = json;
  let fl = '';
  if (flex > 3) {
    style += `-webkit-box-flex:${flex};flex-grow:${flex};`;
  } else {
    fl = flex >= 0 ? `fl${flex}` : '';
  }
  return `<div class="mdBxFiller ${fl}" style="${style}" ></div>`;
}

function icon_object(json: any) {
  let style2 = '';
  let {
    size,
    aspectRatio,
    url,
    position,
    margin,
    offsetTop,
    offsetBottom,
    offsetStart,
    offsetEnd,
  } = json;
  let styleimg = `background-image:url('${url}');`;

  size = !size || size === '' ? 'md' : size;
  if (size.indexOf('px') >= 0) {
    style2 += `font-size:${size};`;
    size = '';
  } else {
    size = 'Ex' + upperalldigit(size);
  }

  let ratio: any = '100';
  if (!aspectRatio || aspectRatio === '') {
    styleimg += `width:1em;`;
  } else {
    ratio = ratio[0] / ratio[1];
    styleimg += `width:${ratio}em;`;
  }
  let exabs = position === 'absolute' ? 'ExAbs' : '';
  let exmgn = '';
  if (margin && margin.indexOf('px') >= 0) {
    style2 += `margin-top:${margin};`;
    exmgn = '';
  } else {
    exmgn = margin ? 'ExMgnT' + upperalldigit(margin) : '';
  }

  let ext = '';
  if (offsetTop && offsetTop.indexOf('px') >= 0) {
    style2 += `top:${offsetTop};`;
    ext = '';
  } else {
    ext = offsetTop ? 'ExT' + upperalldigit(offsetTop) : '';
  }

  let exb = '';
  if (offsetBottom && offsetBottom.indexOf('px') >= 0) {
    style2 += `bottom:${offsetBottom};`;
    exb = '';
  } else {
    exb = offsetBottom ? 'ExB' + upperalldigit(offsetBottom) : '';
  }

  let exl = '';
  if (offsetStart && offsetStart.indexOf('px') >= 0) {
    style2 += `left:${offsetStart};`;
    exl = '';
  } else {
    exl = offsetStart ? 'ExL' + upperalldigit(offsetStart) : '';
  }

  let exr = '';
  if (offsetEnd && offsetEnd.indexOf('px') >= 0) {
    style2 += `right:${offsetEnd};`;
    exr = '';
  } else {
    exr = offsetEnd ? 'ExR' + upperalldigit(offsetEnd) : '';
  }

  return `<div class="MdIco fl0 ${size} ${exabs} ${exmgn} ${ext} ${exb} ${exl} ${exr}" style="${style2}" ><div><span style="${styleimg}"></span></div></div>`;
}
function image_object(json: any) {
  let style = '';
  let style2 = '';
  let {
    aspectMode,
    size,
    aspectRatio,
    url,
    position,
    flex,
    margin,
    align,
    gravity,
    backgroundColor,
    offsetTop,
    offsetBottom,
    offsetStart,
    offsetEnd,
    action,
  } = json;
  let styleimg = `background-image:url('${url}');`;
  if (backgroundColor) {
    styleimg += `background-color:${backgroundColor} !important;`;
  }

  aspectMode = !aspectMode || aspectMode === '' ? 'fit' : aspectMode;
  size = !size || size === '' ? 'md' : size;
  aspectMode = upperalldigit(aspectMode);
  if (size.indexOf('px') >= 0) {
    style2 += `width:${size};`;
    size = '';
  } else {
    size = 'Ex' + upperalldigit(size);
  }

  let ratio;
  if (!aspectRatio || aspectRatio === '') {
    ratio = '100';
  } else {
    ratio = aspectRatio.split(':');
    ratio = (ratio[1] * 100) / ratio[0];
  }
  let fl = '';
  if (flex > 3) {
    style += `-webkit-box-flex:${flex};flex-grow:${flex};`;
  } else {
    fl = flex >= 0 ? `fl${flex}` : '';
  }
  let exabs = position === 'absolute' ? 'ExAbs' : '';

  let exmgn = '';
  if (margin && margin.indexOf('px') >= 0) {
    style += `margin-top:${margin};`;
    exmgn = '';
  } else {
    exmgn = margin ? 'ExMgnT' + upperalldigit(margin) : '';
  }

  let alg =
    align === 'start' || align === 'end' ? 'alg' + upper1digit(align) : '';
  let grv =
    gravity === 'bottom' || gravity === 'center'
      ? 'grv' + upper1digit(gravity)
      : '';

  let ext = '';
  if (offsetTop && offsetTop.indexOf('px') >= 0) {
    style += `top:${offsetTop};`;
    ext = '';
  } else {
    ext = offsetTop ? 'ExT' + upperalldigit(offsetTop) : '';
  }

  let exb = '';
  if (offsetBottom && offsetBottom.indexOf('px') >= 0) {
    style += `bottom:${offsetBottom};`;
    exb = '';
  } else {
    exb = offsetBottom ? 'ExB' + upperalldigit(offsetBottom) : '';
  }

  let exl = '';
  if (offsetStart && offsetStart.indexOf('px') >= 0) {
    style += `left:${offsetStart};`;
    exl = '';
  } else {
    exl = offsetStart ? 'ExL' + upperalldigit(offsetStart) : '';
  }

  let exr = '';
  if (offsetEnd && offsetEnd.indexOf('px') >= 0) {
    style += `right:${offsetEnd};`;
    exr = '';
  } else {
    exr = offsetEnd ? 'ExR' + upperalldigit(offsetEnd) : '';
  }
  action = !action ? { type: 'none' } : action;
  if (action.type === 'uri') {
    return `<div class="MdImg Ex${aspectMode} ${fl} ${size} ${exabs} ${exmgn} ${alg} ${grv} ${ext} ${exb} ${exl} ${exr}"  style="${style}">
                 <div style="${style2}">
                    <a href="${action.uri}" target="_blank" style="padding-bottom:${ratio}%;">
                       <span style="${styleimg}"></span>
                    </a>
                 </div>
              </div>`;
  } else if (action.type === 'message') {
    return `<div class="MdImg Ex${aspectMode} ${fl} ${size} ${exabs} ${exmgn} ${alg} ${grv} ${ext} ${exb} ${exl} ${exr}"  style="${style}">
                 <div style="${style2}">
                    <a onclick="alert('message: ${action.text}')" style="padding-bottom:${ratio}%;">
                       <span style="${styleimg}"></span>
                    </a>
                 </div>
              </div>`;
  } else if (action.type === 'postback') {
    return `<div class="MdImg Ex${aspectMode} ${fl} ${size} ${exabs} ${exmgn} ${alg} ${grv} ${ext} ${exb} ${exl} ${exr}"  style="${style}">
                 <div style="${style2}">
                    <a onclick="alert('postback data: ${action.data}')" style="padding-bottom:${ratio}%;">
                       <span style="${styleimg}"></span>
                    </a>
                 </div>
              </div>`;
  } else {
    return `<div class="MdImg Ex${aspectMode} ${fl} ${size} ${exabs} ${exmgn} ${alg} ${grv} ${ext} ${exb} ${exl} ${exr}"  style="${style}">
                 <div style="${style2}">
                    <a style="padding-bottom:${ratio}%;">
                       <span style="${styleimg}"></span>
                    </a>
                 </div>
              </div>`;
  }
}
function separator_object(json: any) {
  let style = '';
  let { margin, color } = json;

  let exmgn = '';
  if (margin && margin.indexOf('px') >= 0) {
    style += `margin-top:${margin};`;
    exmgn = '';
  } else {
    exmgn = margin ? 'ExMgnT' + upperalldigit(margin) : '';
  }
  if (color) {
    style += `border-color:${color} !important;`;
  }

  return `<div class="fl0 MdSep ${exmgn}" style="${style}" ></div>`;
}
function spacer_object(json: any) {
  let { size } = json;
  size = !size || size === '' ? 'md' : size;
  if (size.indexOf('px') >= 0) {
    size = '';
  } else {
    size = 'spc' + upperalldigit(size);
  }
  return `<div class="mdBxSpacer ${size} fl0" ></div>`;
}
function span_object(json: any) {
  let style2 = '';
  let { text, size, color, weight, style, decoration } = json;

  if (size && size !== '') {
    if (size.indexOf('px') >= 0) {
      style2 += `font-size:${size};`;
      size = '';
    } else {
      size = 'Ex' + upperalldigit(size);
    }
  } else {
    size = '';
  }

  if (color && color !== '') {
    style2 += `color:${color};`;
  }
  let ExWB = weight === 'bold' ? 'ExWB' : '';
  let ExFntSty =
    style === 'normal' ? 'ExFntStyNml' : style === 'italic' ? 'ExFntStyIt' : '';
  let ExTxtDec =
    decoration === 'line-through'
      ? 'ExTxtDecLt'
      : decoration === 'underline'
      ? 'ExTxtDecUl'
      : decoration === 'none'
      ? 'ExTxtDecNone'
      : '';

  return `<span class="MdSpn ${ExWB} ${size} ${ExFntSty} ${ExTxtDec}" style="${style2}" >${text}</span>`;
}

function bubble_struc(json: any) {
  let { size, direction, action } = json;
  size = !size || size === '' ? 'medium' : size;
  direction = !direction || direction == '' ? 'ltr' : direction;
  size = upper2digit(size);

  return `<div class="lyItem Ly${size}"><div class="T1 fx${direction.toUpperCase()}" dir="${direction}"><!-- hero --><!-- header --><!-- body --><!-- footer --></div></div>`;
}
function hero_struc() {
  return `<div class="t1Hero"><!-- inner --></div>`;
}
function header_struc() {
  return `<div class="t1Header"><!-- inner --></div>`;
}
function body_struc(json: any) {
  let { footer } = json;
  let ExHasFooter = json ? 'ExHasFooter' : '';
  return `<div class="t1Body ${ExHasFooter}"><!-- inner --></div>`;
}
function footer_struc() {
  return `<div class="t1Footer"><!-- inner --></div>`;
}
function text_object(json: any) {
  let style2 = '';
  let {
    flex,
    margin,
    size,
    position,
    align,
    gravity,
    text,
    color,
    weight,
    style,
    decoration,
    wrap,
    maxLines,
    adjustMode,
    offsetTop,
    offsetBottom,
    offsetStart,
    offsetEnd,
  } = json;

  let fl = '';
  if (flex > 3) {
    style2 += `-webkit-box-flex:${flex};flex-grow:${flex};`;
  } else {
    fl = flex >= 0 ? `fl${flex}` : '';
  }
  let exabs = position === 'absolute' ? 'ExAbs' : '';
  let exmgn = '';
  if (margin && margin.indexOf('px') >= 0) {
    style2 += `margin-top:${margin};`;
    exmgn = '';
  } else {
    exmgn = margin ? 'ExMgnL' + upperalldigit(margin) : '';
  }

  let alg =
    align === 'start' || align === 'end' || align === 'center'
      ? 'ExAlg' + upper1digit(align)
      : '';
  let grv =
    gravity === 'bottom' || gravity === 'center'
      ? 'grv' + upper1digit(gravity)
      : '';
  size = !size || size === '' ? 'md' : size;
  if (size.indexOf('px') >= 0) {
    style2 += `font-size:${size};`;
    size = '';
  } else {
    size = 'Ex' + upperalldigit(size);
  }

  if (color && color !== '') {
    style2 += `color:${color};`;
  }
  let ext;
  let ExWB = weight === 'bold' ? 'ExWB' : '';
  let ExFntSty =
    style === 'normal' ? 'ExFntStyNml' : style === 'italic' ? 'ExFntStyIt' : '';
  let ExTxtDec =
    decoration === 'line-through'
      ? 'ExTxtDecLt'
      : decoration === 'underline'
      ? 'ExTxtDecUl'
      : decoration === 'none'
      ? 'ExTxtDecNone'
      : '';
  let ExWrap = wrap === true ? 'ExWrap' : '';
  if (offsetTop && offsetTop.indexOf('px') >= 0) {
    style2 += `top:${offsetTop};`;
    ext = '';
  } else {
    ext = offsetTop ? 'ExT' + upperalldigit(offsetTop) : '';
  }
  let exb;
  if (offsetBottom && offsetBottom.indexOf('px') >= 0) {
    style2 += `bottom:${offsetBottom};`;
    exb = '';
  } else {
    exb = offsetBottom ? 'ExB' + upperalldigit(offsetBottom) : '';
  }
  let exl;
  if (offsetStart && offsetStart.indexOf('px') >= 0) {
    style2 += `left:${offsetStart};`;
    exl = '';
  } else {
    exl = offsetStart ? 'ExL' + upperalldigit(offsetStart) : '';
  }
  let exr;

  if (offsetEnd && offsetEnd.indexOf('px') >= 0) {
    style2 += `right:${offsetEnd};`;
    exr = '';
  } else {
    exr = offsetEnd ? 'ExR' + upperalldigit(offsetEnd) : '';
  }
  text = !text ? '' : text;
  return `<div class="MdTxt ${fl} ${exabs} ${exmgn} ${alg} ${grv} ${size} ${ExWB} ${ExFntSty} ${ExTxtDec} ${ExWrap} ${ext} ${exb} ${exl} ${exr}" style="${style2}"><p>${text}<!-- content --></p></div>`;
}

function upper1digit(str: string) {
  return str.charAt(0).toUpperCase();
}
function upper2digit(str: string) {
  return str.charAt(0).toUpperCase() + str.substring(1, 2);
}
function upperalldigit(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
