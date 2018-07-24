import { Component } from '@stencil/core';

@Component({
  tag: 'my-carousel',
  styleUrl: 'my-carousel.css',
})
export class MyCarousel {

    render() {
        return(
            <div class="container">
                <h2>Carousel Component</h2>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="https://www.mastercard.us/en-us/_jcr_content/contentpar/herobanner/herobannerpar/hero/image.adaptive.full.high.jpg/1529935858683.jpg" alt="Los Angeles --" ></img>
                            <div class="carousel-caption">
                                <h1>Find the card that's right for you</h1>
                                <h4 class="hidden-xs">Explore the benefits of Mastercard<sup>®</sup>. No card is more accepted around the world. </h4>

                                <a href="/en-us/consumers/find-card-products/personal.html" class="cta white btn" title="Find the card that's right for you" data-real-copy="Get a credit card">
                                    <span class="btn btn-default btn-large">Get a credit card</span>
                                </a>
                            </div>
                        </div>

                        
                        <div class="item">
                            <img src='https://www.mastercard.us/en-us/_jcr_content/contentpar/herobanner/herobannerpar/hero_577566086/image.adaptive.full.high.jpg/1529935836752.jpg' alt="Chicago --" ></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}