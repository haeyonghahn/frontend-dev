// jQuery 버젼
var TabBox = {
	init: function(){
		$(function() {
			$('.tab-box ul li').click(TabBox._onTabClicked);
		});		
	},	
	_onTabClicked: function(){
		//unselect
		$('.tab-box li.selected').removeClass('selected');
		
		// seclect
		$(this).addClass('selected');
		$('.tab-box div').text($(this).text() + " 탭뷰입니다.");
	}	
}