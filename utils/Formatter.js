jQuery.sap.declare("net.zalando.townhouse.rooms.utils.Formatter");

net.zalando.townhouse.rooms.utils.Formatter = {
    
formatAvailableToIcon : function(bAvailable) {
		return bAvailable ? "sap-icon://accept" : "sap-icon://decline";
	}
    
};