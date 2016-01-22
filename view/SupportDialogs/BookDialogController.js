jQuery.sap.declare("net.zalando.townhouse.rooms.view.SupportDialogs.BookDialogController");

net.zalando.townhouse.rooms.view.SupportDialogs.BookDialogController = {

	_updateText: function(oCalendar, oView) {
		var oSelectedDateFrom = oView.byId("selectedDateFrom");
		var oSelectedDateTo = oView.byId("selectedDateTo");
		var aSelectedDates = oCalendar.getSelectedDates();
		var oDate;
		if (aSelectedDates.length > 0 ) {
			oDate = aSelectedDates[0].getStartDate();
			if (oDate) {
				oSelectedDateFrom.setText(this.oFormatYyyymmdd.format(oDate));
			} else {
				oSelectedDateTo.setText("No Date Selected");
			}
			oDate = aSelectedDates[0].getEndDate();
			if (oDate) {
				oSelectedDateTo.setText(this.oFormatYyyymmdd.format(oDate));
			} else {
				oSelectedDateTo.setText("No Date Selected");
			}
		} else {
			oSelectedDateFrom.setText("No Date Selected");
			oSelectedDateTo.setText("No Date Selected");
		}
	}

};