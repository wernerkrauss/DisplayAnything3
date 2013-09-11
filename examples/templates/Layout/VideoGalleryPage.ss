<div>
	
	<h2>$Title</h2>

	$Content
	
	<% if VideoGallery %>
		<% with VideoGallery %>
			<div id="ImageGallery">
				<h4>$Title</h4>
				<div class="inner">
					<% if OrderedGalleryItems %>
						<div id="OrderedGalleryItems">
							<ul id="GalleryList">
								<% loop OrderedGalleryItems %>
									<li class="$EvenOdd $FirstLast">
										$EmbedCode(500, 300)
									</li>
								<% end_loop %>
							</ul>
						</div>
					<% end_if %>
					<% include Clearer %>
				</div>
			</div>
		<% end_with %>
	<% end_if  %>
	
</div>