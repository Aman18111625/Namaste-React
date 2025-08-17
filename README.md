# Namaste-React-Learning
1. Emmit : It's basically generate some code for us in vs code.
2. appendChild() : it's a method that is available on every HTML node.
3. CDN: it's known as Content Delivery Network. CDN are the websites that has been hosted and we're just pulling react from CDN into our projects.
4. "crossorigin" attribute: It's provides support for CORS, defining how the element handles cross-origin requests there by enabling the configuration of the CORS request for the element's fetched date.

# Project-1 : Food Ordering App (findLocalFood)
   Components: 
   Header -> Logo, NavBar(Home, About, Contact etc)
   Body -> Restaurant --> Image, Rating, Name, Cuisine
   Footer -> Links, Contact Info

# Types of Export/Import 
1. Default --> 
export default componentName
import componentName from file-path


2. Named -->
export const componentName;
import {componentName} from file-path

Note: 1 file/module can have only 1 default but can have multiple named export. Also we can importing default with any name but named export should import using same name or using alias(as keyword)

# React Hooks
(Normal Inbuilt JS functions)
useState() --> to update state dynamically (ex. counter, filter etc)
useEffect() --> re-rende

ring of components after effect

