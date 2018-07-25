import { Component, State, Element } from '@stencil/core';
import { Card } from '../../models/card';

@Component({
  tag: 'cards-component',
  styleUrl: 'cards-component.css',
  shadow: false
})
export class CardsComponent {


  @State() cards: Array<Card>;
  @State() translateXval: any = 0;
  @State() leftSlides: any = 0;
  @State() rightSlides: any = 0;
  @Element() private element: HTMLElement;
  @State() itemWidth = 220;
  @State() timer: any;
  
  componentWillLoad() {
    this.cards = [];
  }
  componentDidLoad() {
    const containerWidth =this.element.children[0].clientWidth;
    const itemsCount = 10;
    for (let i = 0; i < itemsCount; i++) {
      let card = new Card();
      card.Title = i + " Card";
      card.Link = "https://Google.com";
      card.ImageUrl = "https://www.mastercard.us/content/mccom-admin/referenced-content-placeholder/related-content-consumers/_jcr_content/contentpar/related_content_item_839709220/image.adaptive.full.high.jpg/1531405551797.jpg";
      card.Content = "Enjoy the benefits of exclusive offers, unmatched experiences and other perks at the nation's premier clubs and tournaments.";

      this.AddCard(card);
    }
    // set the width of the inner container
    const list = this.element.querySelectorAll('.MultiCarousel-inner');
    [].forEach.call(list, div => div.style.width = (itemsCount * this.itemWidth) + 'px');
    const visibleItems = parseInt((containerWidth / this.itemWidth).toString().split('.')[0]);
    this.rightSlides = itemsCount - visibleItems;
    this.timer = setInterval(() => {this.MoveToRight(true)}, 2000);

  }

  AddCard(card) {
    this.cards = [...this.cards, card];
  }
  MoveToLeft() {
    if (this.leftSlides > 0) {
      this.translateXval -= this.itemWidth;
      const list = this.element.querySelectorAll('.MultiCarousel-inner');
      [].forEach.call(list, li => li.style.transform = 'translateX(' + -this.translateXval + 'px)');
      this.leftSlides -= 1;
      this.rightSlides += 1;
    }


  }
  MoveToRight(fromTimer: boolean) {
    if (this.rightSlides > 0) {
      this.translateXval += this.itemWidth;      
      const list = this.element.querySelectorAll('.MultiCarousel-inner');
      [].forEach.call(list, li => li.style.transform = 'translateX(' + -this.translateXval + 'px)');
      this.leftSlides += 1;
      this.rightSlides -= 1;
    }
    if(!fromTimer){
      clearInterval(this.timer);
    }

  }


  render() {
    return (
      <div class="MultiCarousel" id="MultiCarousel">
        <div class="MultiCarousel-inner" id="MultiCarousel-inner inner">
          {this.cards.map((card) => {
            return <div class="Card-Container item">
              <img src={card.ImageUrl} />
              <h3> <a href={card.Link}>{card.Title}</a></h3>
              <span>{card.Content}</span>
            </div>
          })}
        </div>
        <button class="btn btn-primary leftLst" onClick={() => this.MoveToLeft()} > > </button>
        <button class="btn btn-primary rightLst" onClick={() => this.MoveToRight(false)}>></button>
      </div>
    );
  }
}