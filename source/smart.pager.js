
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-pager",class extends Smart.BaseElement{static get properties(){return{autoEllipsis:{value:"none",type:"string",allowedValues:["none","before","after","both"]},messages:{value:{en:{firstButton:"First",lastButton:"Last",previousButton:"Previous",nextButton:"Next",navigateToLabel:"Go to:",pageSizeLabel:"Show:",navigateToInputPlaceholder:"",ellipsis:"...",summaryString:"of",summaryPrefix:"of",summarySuffix:""}},type:"object",extend:!0},navigationButtonsPosition:{value:"both",allowedValues:["near","far","both"],type:"string"},navigationInputPosition:{value:"far",allowedValues:["near","far"],type:"string"},pageIndex:{value:0,type:"number"},pageIndexSelectors:{value:0,type:"any"},pagesCount:{value:100,type:"number"},pageSize:{value:10,type:"number"},pageSizeSelectorPosition:{value:"far",allowedValues:["near","far"],type:"string"},pageSizeSelectorDataSource:{value:[10,25,50],type:"array"},showPrevNextNavigationButtons:{value:!1,type:"boolean"},showFirstLastNavigationButtons:{value:!1,type:"boolean"},showNavigationButtonLabels:{value:!1,type:"boolean"},showNavigationInput:{value:!1,type:"boolean"},showSummary:{value:!1,type:"boolean"},showPageSizeSelector:{value:!1,type:"boolean"},showPageIndexSelectors:{value:!1,type:"boolean"},summaryPosition:{value:"far",allowedValues:["near","far"],type:"string"}}}static get listeners(){return{click:"_navigationButtonsClickHandler","nextEllipsisButton.click":"_nextEllipsisButtonClickHandler","previousEllipsisButton.click":"_previousEllipsisButtonClickHandler",down:"_navigationButtonsDownHandler","navigateToInput.change":"_navigateToInputChangeHandler","nextButton.mouseenter":"_updateInBoundsFlag","nextButton.mouseleave":"_updateInBoundsFlag","pageIndexSelectorsContainer.click":"_pageIndexSelectorsContainerClickHandler","pageSizeSelector.change":"_pageSizeSelectorChangeHandler","previousButton.mouseenter":"_updateInBoundsFlag","previousButton.mouseleave":"_updateInBoundsFlag",keydown:"_keyDownHandler",resize:"_resizeHandler","document.up":"_stopRepeat"}}static get requires(){return{"Smart.DropDownList":"smart.dropdownlist.js"}}static get styleUrls(){return["smart.pager.css"]}template(){return`<div id="container">
                    <div id="nearButtonsContainer" class="smart-pager-near-buttons-container">
                        <div id="firstButton" class="smart-first-button smart-pager-button smart-unselectable"></div>
                        <div id="previousButton" class="smart-previous-page-button smart-pager-button smart-unselectable"></div>
                    </div>
                    <div id="middleButtonsContainer" class="smart-pager-middle-buttons-container">
                           <span id="previousEllipsisButton" class="smart-previous-ellipsis-button smart-pager-page-index-selector"></span>
                           <div id="pageIndexSelectorsContainer" tabindex="0" class="smart-pager-page-index-selectors-container"></div>
                           <span id="nextEllipsisButton" class="smart-next-ellipsis-button smart-pager-page-index-selector"></span>
                    </div>
                    <div id="farButtonsContainer" class="smart-pager-far-buttons-container">
                        <div id="nextButton" class="smart-next-page-button smart-pager-button smart-unselectable"></div>
                        <div id="lastButton" class="smart-last-button smart-pager-button smart-unselectable"></div>
                    </div>
                    <div id="pagerInputAndLabelContainer" class="smart-pager-input-and-label-container">
                        <span id="navigateToLabel" class="smart-pager-label"></span>
                        <input type="text" id="navigateToInput" class="smart-pager-input smart-input" />
                   </div>
                 <div id="pagerSizeSelectorAndLabelContainer" class="smart-pager-size-selector-and-label-container">
                        <span id="pageSizeLabel" class="smart-pager-label"></span>
                        <smart-drop-down-list id="pageSizeSelector" class="smart-page-size-selector"
                                data-source="[[pageSizeSelectorDataSource]]"
                                drop-down-height="auto"
                                selection-mode="one"
                                selected-indexes=[0]
                                disabled="[[disabled]]">
                        </smart-drop-down-list>
                    </div>
                  <span id="pagerSummaryContainer" class="smart-pager-summary-container smart-pager-label"></span>
                </div>`}ready(){super.ready();const a=this;a._render()}refresh(){const a=this;a._render()}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;switch(a){case"navigationButtonsPosition":return void d._renderButtons();case"navigationInputPosition":case"pageSizeSelectorPosition":case"summaryPosition":return void d._renderSettings();}d._render()}next(){const a=this;a.navigateTo(a.pageIndex+1)}prev(){const a=this;a.navigateTo(a.pageIndex-1)}beginUpdate(){const a=this;a._updating=!0}endUpdate(){const a=this;a._updating=!1,a._render()}_render(){const a=this;if(!a._updating&&(a.$.navigateToInput.value=(1+a.pageIndex).toString(),a._renderButtons(),a._renderPageIndexSelectors(),a._renderSettings(),a._renderVisibility(),a._localize(),a.$.pageSizeSelector&&a.showPageSizeSelector)){const b=a.pageSizeSelectorDataSource.indexOf(a.pageSize);0<=b&&(a.$.pageSizeSelector.selectedIndexes=[b])}}_resizeHandler(){const a=this;a._renderVisibility()}_renderVisibility(){const a=this,b=a.offsetWidth-20;a.showSummary?a.$pagerSummaryContainer.removeClass("smart-hidden"):a.$pagerSummaryContainer.addClass("smart-hidden"),a.showPageIndexSelectors?a.$middleButtonsContainer.removeClass("smart-hidden"):a.$middleButtonsContainer.addClass("smart-hidden"),a.showNavigationInput?(a.$navigateToLabel.removeClass("smart-hidden"),a.$navigateToInput.removeClass("smart-hidden")):(a.$navigateToLabel.addClass("smart-hidden"),a.$navigateToInput.addClass("smart-hidden")),a.showPageSizeSelector?(a.$pageSizeLabel.removeClass("smart-hidden"),a.$pageSizeSelector.removeClass("smart-hidden")):(a.$pageSizeLabel.addClass("smart-hidden"),a.$pageSizeSelector.addClass("smart-hidden")),a.showFirstLastNavigationButtons?(a.$firstButton.removeClass("smart-hidden"),a.$lastButton.removeClass("smart-hidden")):(a.$firstButton.addClass("smart-hidden"),a.$lastButton.addClass("smart-hidden")),a.showPrevNextNavigationButtons?(a.$previousButton.removeClass("smart-hidden"),a.$nextButton.removeClass("smart-hidden")):(a.$previousButton.addClass("smart-hidden"),a.$nextButton.addClass("smart-hidden")),a.$previousEllipsisButton.addClass("smart-hidden"),a.$nextEllipsisButton.addClass("smart-hidden"),"after"!==a.autoEllipsis&&"none"!==a.autoEllipsis&&a.pageIndex>=a._pageIndexSelectorsCount&&a.$previousEllipsisButton.removeClass("smart-hidden"),"before"!==a.autoEllipsis&&"none"!==a.autoEllipsis&&a.pageIndex<a.pagesCount-a._pageIndexSelectorsCount&&a.$nextEllipsisButton.removeClass("smart-hidden");for(let b=0;b<a._pageIndexSelectorsCount&&!!a.$.pageIndexSelectorsContainer.children[b];b++)a.$.pageIndexSelectorsContainer.children[b].classList.remove("smart-hidden");const c=a.$.pagerSummaryContainer.offsetWidth?Math.max(100,a.$.pagerSummaryContainer.offsetWidth):0;let d=a.$.nearButtonsContainer.offsetWidth+a.$.middleButtonsContainer.offsetWidth+a.$.farButtonsContainer.offsetWidth+c+a.$.pagerInputAndLabelContainer.offsetWidth+a.$.pagerSizeSelectorAndLabelContainer.offsetWidth;if(0<d&&d>b&&(d-=a.$.pagerSummaryContainer.offsetWidth,a.$pagerSummaryContainer.addClass("smart-hidden"),d>b&&(d-=a.$.navigateToLabel.offsetWidth,d-=a.$.navigateToInput.offsetWidth,a.$navigateToLabel.addClass("smart-hidden"),a.$navigateToInput.addClass("smart-hidden"),d>b))){if(d-=a.$.pageSizeLabel.offsetWidth,d-=a.$.pageSizeSelector.offsetWidth,a.$pageSizeLabel.addClass("smart-hidden"),a.$pageSizeSelector.addClass("smart-hidden"),d>b){a.$previousEllipsisButton.addClass("smart-hidden"),a.$nextEllipsisButton.addClass("smart-hidden"),d-=a.$.previousEllipsisButton.offsetWidth,d-=a.$.nextEllipsisButton.offsetWidth;for(let c=a._pageIndexSelectorsCount-1;0<=c;c--){const e=a.$.pageIndexSelectorsContainer.children[c];if(d<b||!e)break;d-=e.offsetWidth,e.classList.add("smart-hidden")}}d>b&&a.showFirstLastNavigationButtons&&(a.$firstButton.addClass("smart-hidden"),a.$lastButton.addClass("smart-hidden"))}}_renderSettings(){const a=this,b=a.pageIndex*a.pageSize,c=(a.pageIndex+1)*a.pageSize,d=a.pagesCount*a.pageSize;a.$pagerSummaryContainer.removeClass("near"),a.$pagerSizeSelectorAndLabelContainer.removeClass("near"),a.$pagerInputAndLabelContainer.removeClass("near"),"near"===a.summaryPosition&&a.$pagerSummaryContainer.addClass("near"),"near"===a.pageSizeSelectorPosition&&a.$pagerSizeSelectorAndLabelContainer.addClass("near"),"near"===a.navigationInputPosition&&a.$pagerInputAndLabelContainer.addClass("near"),a.$.pagerSummaryContainer.innerHTML="<span class=\"smart-summary-start\">"+(1+b)+"</span> <span class=\"smart-summary-hyphen\">-</span> <span class=\"smart-summary-end\">"+c+"</span><span class=\"smart-summary-prefix\">"+a.localize("summaryPrefix")+"</span> <span class=\"smart-summary-total-end\">"+d+"</span> <span class=\"smart-summary-suffix\">"+a.localize("summarySuffix")+"</span>"}get _pageIndexSelectorsCount(){const a=this;let b=parseInt(a.pageIndexSelectors);return Array.isArray(a.pageIndexSelectors)&&(b=a.pageIndexSelectors.length),b}_renderPageIndexSelectors(){const a=this;if(0>a.pageIndex||a.pageIndex>=a.pagesCount)return;a.$.pageIndexSelectorsContainer.innerHTML="";let b=!1;Array.isArray(a.pageIndexSelectors)&&(b=!0);let c=Math.floor(a.pageIndex/a._pageIndexSelectorsCount)*a._pageIndexSelectorsCount,d=Math.min(a.pagesCount,c+a._pageIndexSelectorsCount),e=0;for(let f=c;f<d;f++){const c=document.createElement("span");let d=f+1;if(c.className="smart-pager-page-index-selector",b){const b=a.pageIndexSelectors[e++];b&&(b.label?d=a.pageIndexSelectors[f].label:"string"==typeof b&&(d=b),b.value&&c.setAttribute("value",a.pageIndexSelectors[f].value))}c.index=f,c.innerHTML=d,a.$.pageIndexSelectorsContainer.appendChild(c),f===a.pageIndex&&(c.classList.add("smart-selected"),c.setAttribute("selected",""))}}_lastButtonClickHandler(){const a=this;a.last()}last(){const a=this;a.navigateTo(a.pagesCount-1)}_firstButtonClickHandler(){const a=this;a.first()}first(){const a=this;a.navigateTo(0)}_renderButtons(){const a=this;switch(0===a.pageIndex?(a.$.firstButton.setAttribute("disabled",""),a.$.previousButton.setAttribute("disabled","")):(a.$.firstButton.removeAttribute("disabled"),a.$.previousButton.removeAttribute("disabled")),a.pageIndex===a.pagesCount-1?(a.$.nextButton.setAttribute("disabled",""),a.$.lastButton.setAttribute("disabled","")):(a.$.nextButton.removeAttribute("disabled"),a.$.lastButton.removeAttribute("disabled")),a.$nearButtonsContainer.removeClass("far"),a.$farButtonsContainer.removeClass("far"),a.$nearButtonsContainer.removeClass("near"),a.$farButtonsContainer.removeClass("near"),a.navigationButtonsPosition){case"near":a.$nearButtonsContainer.addClass("near"),a.$farButtonsContainer.addClass("near");break;case"far":a.$nearButtonsContainer.addClass("far"),a.$farButtonsContainer.addClass("far");break;case"both":a.$nearButtonsContainer.addClass("near"),a.$farButtonsContainer.addClass("far");}}_navigateToInputChangeHandler(){const a=this;let b=parseInt(a.$.navigateToInput.value)-1;isNaN(b)&&(a.$.navigateToInput.value="1",b=parseInt(a.$.navigateToInput.value-1)),a.navigateTo(b)}_pageIndexSelectorsContainerClickHandler(a){const b=this,c=b.enableShadowDOM?a.composedPath()[0].closest(".smart-pager-page-index-selector"):a.target.closest(".smart-pager-page-index-selector");!c||c.classList.contains("smart-selected")||b.navigateTo(c.index)}_pageSizeSelectorChangeHandler(a){const b=this;!b.showPageSizeSelector||b.disabled||b._updating||(b.pageSize=parseInt(a.detail.value),b.$.fireEvent("pageSizeChanged",{value:parseInt(a.detail.value)}))}_keyDownHandler(a){const b=this;if(!b.disabled&&(b.enableShadowDOM?b.shadowRoot.activeElement||document.activeElement:document.activeElement)!==b.$.navigateToInput&&null===b.$.pageSizeSelector.getAttribute("focus"))switch(a.key){case"End":b.last(),a.preventDefault();break;case"Home":b.first(),a.preventDefault();break;case"PageDown":case"ArrowDown":case"ArrowLeft":b.prev(),a.preventDefault();break;case"PageUp":case"ArrowUp":case"ArrowRight":b.next(),a.preventDefault();}}_nextButtonClickHandler(){const a=this;a.next()}_previousButtonClickHandler(){const a=this;a.prev()}navigateTo(a){const b=this,c=b.pageIndex;b.disabled||b.pageIndex===a||0>a||a>=b.pagesCount||(b.pageIndex=a,b._render(),b.$.fireEvent("change",{oldIndex:c,index:a}))}_localize(){const a=this,b=["firstButton","lastButton","previousButton","nextButton"];for(let c=0;c<b.length;c++){const d=a.$[b[c]];!a.showNavigationButtonLabels&&2>c?(d.innerHTML="",0==c?d.classList.add("smart-arrow-left-first"):d.classList.add("smart-arrow-right-last")):!a.showNavigationButtonLabels&&2<=c?(d.innerHTML="",2==c?d.classList.add("smart-arrow-left"):d.classList.add("smart-arrow-right")):(d.classList.remove("smart-arrow-left"),d.classList.remove("smart-arrow-right"),d.classList.remove("smart-arrow-left-first"),d.classList.remove("smart-arrow-right-last"),d.innerHTML=a.localize(b[c]))}a.$.pageSizeLabel.innerHTML=a.localize("pageSizeLabel"),a.$.navigateToLabel.innerHTML=a.localize("navigateToLabel"),a.$.previousEllipsisButton.innerHTML=a.localize("ellipsis"),a.$.nextEllipsisButton.innerHTML=a.localize("ellipsis"),a.$.navigateToInput.placeholder=a.localize("navigateToInputPlaceholder")}_nextEllipsisButtonClickHandler(){const a=this;a.navigateTo(a._pageIndexSelectorsCount+a.pageIndex)}_previousEllipsisButtonClickHandler(){const a=this;a.navigateTo(-a._pageIndexSelectorsCount+a.pageIndex)}_navigationButtonsClickHandler(a){const b=this;if(!b.disabled){const c=b.enableShadowDOM?a.composedPath()[0].closest(".smart-pager-button"):a.target.closest(".smart-pager-button");c===b.$.firstButton?b._firstButtonClickHandler(a):c===b.$.lastButton?b._lastButtonClickHandler(a):c===b.$.previousButton?b._previousButtonClickHandler(a):c===b.$.nextButton?b._nextButtonClickHandler(a):void 0}}_navigationButtonsDownHandler(a){const b=this,c=b.enableShadowDOM?a.originalEvent.composedPath()[0].closest(".smart-pager-button")||a.originalEvent.composedPath()[0].closest(".smart-pager-page-index-selector"):a.originalEvent.target.closest(".smart-pager-button")||a.originalEvent.target.closest(".smart-pager-page-index-selector");b.disabled||!c||(b.hasRippleAnimation&&Smart.Utilities.Animation.Ripple.animate(c,a.pageX,a.pageY),(c===b.$.previousButton||c===b.$.nextButton)&&b._startRepeat(a,c))}_updateInBoundsFlag(a){const b=this,c=b.enableShadowDOM?a.composedPath()[0]:a.target;c._isPointerInBounds=!0,"mouseleave"===a.type&&(c._isPointerInBounds=!1);const d="buttons"in a?a.buttons:a.which;1!==d&&b._stopRepeat(a)}_startRepeat(a,b){const c=this;c._initialTimer||(c._initialTimer=setTimeout(function(){c._repeatTimer=setInterval(()=>{b._isPointerInBounds&&(b===c.$.previousButton?c._previousButtonClickHandler(a):c._nextButtonClickHandler(a))},50)},150))}_stopRepeat(){const a=this;a._repeatTimer&&(clearInterval(a._repeatTimer),a._repeatTimer=null),a._initialTimer&&(clearTimeout(a._initialTimer),a._initialTimer=null)}});