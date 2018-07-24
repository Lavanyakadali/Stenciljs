import { TestWindow } from '@stencil/core/testing';
import { CardsComponent } from './cards-component';

describe('my-component', () => {
  it('should build', () => {
    expect(new CardsComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCardsComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CardsComponent],
        html: '<cards-component></cards-component>'
      });
    });

   
  });
});
