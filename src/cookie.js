/**
 * @author Ryan Johnson <http://saucytiger.com/>
 * @copyright 2008 PersonalGrid Corporation <http://personalgrid.com/>
 * @package LivePipe UI
 * @license MIT
 * @url http://livepipe.net/controls/hotkey/
 * @attribution http://www.quirksmode.org/js/cookies.html
 */

var Cookie = {
	set: function(name,value,seconds){
		if(seconds){
			d = new Date();
			d.setTime(d.getTime() + (seconds * 1000));
			expiry = '; expires=' + d.toGMTString();
		}else
			expiry = '';
		document.cookie = name + "=" + value + expiry + "; path=/";
	},
	get: function(name){
		nameEQ = name + "=";
		ca = document.cookie.split(';');
		for(i = 0; i < ca.length; i++){
			c = ca[i];
			while(c.charAt(0) == ' ')
				c = c.substring(1,c.length);
			if(c.indexOf(nameEQ) == 0)
				return c.substring(nameEQ.length,c.length);
		}
		return null
	},
	unset: function(name){
		Cookie.set(name,'',-1);
	}
};