(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[9322],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45983:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=t(74034),r=t(79973),i=(t(67294),t(3905)),o={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},s={unversionedId:"drawer-based-navigation",id:"version-6.x/drawer-based-navigation",isDocsHomePage:!1,title:"Drawer navigation",description:"Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens.",source:"@site/versioned_docs/version-6.x/drawer-based-navigation.md",sourceDirName:".",slug:"/drawer-based-navigation",permalink:"/docs/drawer-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/drawer-based-navigation.md",version:"6.x",sidebar_label:"Drawer navigation",frontMatter:{id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},sidebar:"version-6.x/docs",previous:{title:"Tab navigation",permalink:"/docs/tab-based-navigation"},next:{title:"Authentication flows",permalink:"/docs/auth-flow"}},c=[{value:"Minimal example of drawer-based navigation",id:"minimal-example-of-drawer-based-navigation",children:[]},{value:"Opening and closing drawer",id:"opening-and-closing-drawer",children:[]}],l={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens."),(0,i.kt)("div",{style:{display:"flex",margin:"16px 0"}},(0,i.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.kt)("source",{src:"/assets/navigators/drawer/drawer.mov"}))),(0,i.kt)("p",null,"Before continuing, first install and configure ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/drawer"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/drawer"))," and its dependencies following the ",(0,i.kt)("a",{parentName:"p",href:"/docs/drawer-navigator#installation"},"installation instructions"),"."),(0,i.kt)("h2",{id:"minimal-example-of-drawer-based-navigation"},"Minimal example of drawer-based navigation"),(0,i.kt)("p",null,"To use this drawer navigator, import it from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),":\n(swipe right to open)"),(0,i.kt)("samp",{id:"drawer-based-navigation"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button, View } from 'react-native';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { NavigationContainer } from '@react-navigation/native';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button\n        onPress={() => navigation.navigate('Notifications')}\n        title=\"Go to notifications\"\n      />\n    </View>\n  );\n}\n\nfunction NotificationsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.goBack()} title=\"Go back home\" />\n    </View>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Drawer.Navigator initialRouteName=\"Home\">\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen name=\"Notifications\" component={NotificationsScreen} />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n")),(0,i.kt)("h2",{id:"opening-and-closing-drawer"},"Opening and closing drawer"),(0,i.kt)("p",null,"To open and close drawer, use the following helpers:"),(0,i.kt)("samp",{id:"drawer-open-close-toggle"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"navigation.openDrawer();\nnavigation.closeDrawer();\n")),(0,i.kt)("p",null,"If you would like to toggle the drawer you call the following:"),(0,i.kt)("samp",{id:"drawer-open-close-toggle"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"navigation.toggleDrawer();\n")),(0,i.kt)("p",null,"Each of these functions, behind the scenes, are simply dispatching actions:"),(0,i.kt)("samp",{id:"drawer-dispatch"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"navigation.dispatch(DrawerActions.openDrawer());\nnavigation.dispatch(DrawerActions.closeDrawer());\nnavigation.dispatch(DrawerActions.toggleDrawer());\n")),(0,i.kt)("p",null,"If you would like to determine if drawer is open or closed, you can do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useDrawerStatus } from '@react-navigation/drawer';\n\n// ...\n\nconst isDrawerOpen = useDrawerStatus() === 'open';\n")))}p.isMDXComponent=!0}}]);