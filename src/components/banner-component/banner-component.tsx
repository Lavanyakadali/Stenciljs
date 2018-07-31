import { Component } from '@stencil/core';

@Component({
    tag: 'banner-component',
    styleUrl: 'banner-component.css',
    shadow: false
})
export class BannerComponent {
    render() {
        return (
            <div class="banners cta-banner section">
                <div class="cta-banner-inner gradient-orange">
                    <h2 class="title">Find the card that's right for you</h2>
                    <div class="cta-group cta-link">
                        <button-component text="Credit Cards"></button-component>
                        <button-component text="Gift and prepaid cards"></button-component>
                    </div>
                </div>
            </div>
        );
    }
}
