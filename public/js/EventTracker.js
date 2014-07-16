function EventTracker() {
	this.tracking = false;
	this.events = [];
};

EventTracker.prototype.startTracking = function() {
	this.tracking = true;
};

EventTracker.prototype.stopTracking = function() {
	this.tracking = false;
};

EventTracker.prototype.trackEvent = function(eventName) {
	this.events.push(eventName);
};

EventTracker.prototype.reset = function() {
	this.events = [];
	this.tracking = false;
};

EventTracker.prototype.getEvents = function() {
	return this.events;
};