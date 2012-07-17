var Scroller = function(scrollable,pager)
{
	
	
	$(scrollable).wrap('<div id="wrapper" />');
	
	this.scroll = new iScroll('wrapper', {
		bounce : false,
		onScrollEnd : function() {

			if ($('#wrapper').height()
					- $(scrollable).position().top > $(scrollable).height()
					&& $(scrollable).position().top < 0) {
				
				alert('end of page reached...');
				
				if(pager)
				{
					pager();
					this.scroll.refresh();
				}
				
			}


		}
	});
	
	this.refresh = function()
	{
		this.scroll.refresh();
	}
	
}

