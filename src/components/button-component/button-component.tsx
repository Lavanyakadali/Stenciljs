import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: false
})
export class ButtonComponent {

    @Prop() text:string;
    render() {
        return (
            <div class="cta link cta-group">
                <a href="/en-us/about-mastercard/corp-responsibility/social-sustainability/international-development.html" class="cta white btn" title="Find out how we're bringing millions of people into the financial fold" data-real-copy="Find out how">
                    <span class="btn-copy"> {this.text} </span>
                </a>
            </div>
        );
    }

}
