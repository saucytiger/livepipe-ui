/**
 * @author Ryan Johnson
 * @copyright 2008 PersonalGrid Corporation
 * @package LivePipe UI
 * @license MIT
 * @url http://livepipe.net/controls/hotkey/
 */

if(typeof(Control) == 'undefined')
	var Control = {};
Control.HotKey = Class.create({
	initialize: function(letter,callback,options){
		letter = letter.toUpperCase();
		Control.HotKey.hotkeys.push(this);
		this.options = Object.extend({
			capture: false,
			element: false,
			shiftKey: false,
			altKey: false,
			ctrlKey: true
		},options || {});
		this.letter = letter;
		this.callback = callback;
		this.element = $(this.options.element || document);
		this.handler = function(event){
			if(!event || (this.letter.charCodeAt(0) == event.keyCode && ((!this.options.shiftKey || (this.options.shiftKey && event.shiftKey)) && (!this.options.altKey || (this.options.altKey && event.altKey)) && (!this.options.ctrlKey || (this.options.ctrlKey && event.ctrlKey))))){
				if(this.notify('beforeCallback',event) === false)
					return;
				this.callback(event);	
				if(this.options.capture)
					event.stop();
				this.notify('afterCallback',event);
			}
		}.bind(this);
		this.enable();
	},
	trigger: function(){
		this.handler(false);
	},
	enable: function(){
		this.element.observe('keydown',this.handler);
	},
	disable: function(){
		this.element.stopObserving('keydown',this.handler);
	},
	destroy: function(){
		this.disable();
		
	}
});
Object.extend(Control.HotKey,{
	hotkeys: []
});
Object.Event.extend(Control.HotKey);