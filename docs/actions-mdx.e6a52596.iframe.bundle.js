"use strict";(self.webpackChunkreact_h5_audio_player=self.webpackChunkreact_h5_audio_player||[]).push([[116,226],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./stories/actions.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_hanz_Documents_npm_react_h5_audio_player_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_actions_stories__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),__webpack_require__("./src/index.tsx"),__webpack_require__("./stories/actions.stories.js"));function _createMdxContent(props){const _components={code:"code",h1:"h1",p:"p",...(0,_Users_hanz_Documents_npm_react_h5_audio_player_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.W8,{of:_actions_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"actions",children:"Actions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Different event listeners of the player"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Go to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Canvas"})," tab to see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Actions"})," logger"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.gG,{of:_actions_stories__WEBPACK_IMPORTED_MODULE_4__.Actions})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_hanz_Documents_npm_react_h5_audio_player_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./stories/actions.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Actions:()=>Actions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_src_index_tsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.tsx"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Actions",component:_src_index_tsx__WEBPACK_IMPORTED_MODULE_1__.A},Actions={render:()=>react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_index_tsx__WEBPACK_IMPORTED_MODULE_1__.A,{onAbort:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onAbort"),onCanPlay:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onCanPlay"),onCanPlayThrough:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onCanPlayThrough"),onEnded:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onEnded"),onPlaying:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onPlaying"),onSeeking:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSeeking"),onSeeked:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSeeked"),onLoadStart:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onLoadStart"),onLoadedMetaData:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onLoadedMetaData"),onLoadedData:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onLoadedData"),onError:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onError"),onListen:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onListen"),onVolumeChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onVolumeChange"),onPause:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onPause"),onPlay:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onPlay"),onChangeCurrentTimeError:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onChangeCurrentTimeError"),onClickPrevious:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onClickPrevious"),onClickNext:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onClickNext"),volume:.8,showSkipControls:!0,progressUpdateInterval:100,src:"https://assets.alllq.in/prod/AQ/content/audios/EnglishFluency/U1/A5/6-3-te.mp3"}),name:"Actions"},__namedExportsOrder=["Actions"];Actions.parameters={...Actions.parameters,docs:{...Actions.parameters?.docs,source:{originalSource:'{\n  render: () => <AudioPlayer onAbort={action("onAbort")} onCanPlay={action("onCanPlay")} onCanPlayThrough={action("onCanPlayThrough")} onEnded={action("onEnded")} onPlaying={action("onPlaying")} onSeeking={action("onSeeking")} onSeeked={action("onSeeked")} onLoadStart={action("onLoadStart")} onLoadedMetaData={action("onLoadedMetaData")} onLoadedData={action("onLoadedData")} onError={action("onError")} onListen={action("onListen")} onVolumeChange={action("onVolumeChange")} onPause={action("onPause")} onPlay={action("onPlay")} onChangeCurrentTimeError={action("onChangeCurrentTimeError")} onClickPrevious={action("onClickPrevious")} onClickNext={action("onClickNext")} volume={0.8} showSkipControls progressUpdateInterval={100} src="https://assets.alllq.in/prod/AQ/content/audios/EnglishFluency/U1/A5/6-3-te.mp3" />,\n  name: "Actions"\n}',...Actions.parameters?.docs?.source}}}}}]);