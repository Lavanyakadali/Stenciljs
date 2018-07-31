import { Component } from '@stencil/core';

@Component({
  tag: 'component-title',
  styleUrl: 'component-title.css',
  shadow: false
})
export class ComponentTitle {
    render() {
        return (
<div class="banners hero slick-slide" data-slick-index="0" aria-hidden="true" >

<div class="hero-banner-wrapper full" >

	 	
<div id="cq-image-jsp-/en-us/_jcr_content/contentpar/herobanner/herobannerpar/hero/image" class="image content-feed-item video-single-thumbnail">
    	
     <img src="/en-us/_jcr_content/contentpar/herobanner/herobannerpar/hero/image.adaptive.full.high.jpg/1529935858683.jpg" >		</img>
	</div>
  

	<div class="text text-light bottom" >
		<div class="text-wrapper">

		<div class="component-title">
				<h1>Find the card that's right for you</h1>
			<h3 class="hidden-xs">Explore the benefits of Mastercard<sup>®</sup>. No card is more accepted around the world. </h3>
		</div>
			<div class="cta-group">
                
                 


		
			<a href="/en-us/consumers/find-card-products/personal.html" class="cta white btn" title="Find the card that's right for you" data-real-copy="Get a credit card">
				<span class="btn-copy">Get a credit card</span>
			</a>
		
		

                
                 


			</div>
		</div>
	</div>


</div>
</div>

        );
    }
}
