/**
 * @author Ryan Johnson <http://saucytiger.com/>
 * @copyright 2008 PersonalGrid Corporation <http://personalgrid.com/>
 * @package LivePipe UI
 * @license MIT
 * @url http://livepipe.net/extra/cookie
 * @attribution http://www.quirksmode.org/js/cookies.html
 * @require prototype.js, livepipe.js
 */

if(typeof(Prototype) == "undefined")
	throw "Cookie requires Prototype to be loaded."
if(typeof(Object.Event) == "undefined")
	throw "Cookie requires Object.Event to be loaded.";

var Cookie = {
	set: function(name,value,seconds){
		if(seconds){
			d = new Date();
			d.setTime(d.getTime() + (seconds * 1000));
			expiry = '; expires=' + d.toGMTString();
		}else
			expiry = '';
		Cookie.notify('set',name,value);
		document.cookie = name + "=" + value + expiry + "; path=/";
	},
	get: function(name){
		Cookie.notify('get',name);
		nameEQ = name + "=";
		ca = document.cookie.split(';');
		for(i = 0; i < ca.length; i++){
			c = ca[i];
			while(c.charAt(0) == ' ')
				c = c.substring(1,c.length);
			if(c.indexOf(nameEQ) == 0)
				return c.substring(nameEQ.length,c.length);
		}
		return null;
	},
	unset: function(name){
		Cookie.notify('unset',name);
		Cookie.set(name,'',-1);
	}
};
Object.Event.extend(Cookie);