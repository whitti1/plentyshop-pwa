export class HomePageObject {
  get header() {
    return cy.getByTestId('header');
  }
  get primaryButton() {
    return cy.getByTestId('button').contains('Order now');
  }
  get secondaryButton() {
    return cy.getByTestId('button').contains('Show more');
  }
  get categoryCard() {
    return cy.getByTestId('render-content');
  }
  get banners() {
    return cy.getByComponent('Display');
  }
  get productCard() {
    return cy.getByTestId('product-card');
  }
  get headerButton() {
    return cy.getByTestId('button').contains('Browse products');
  }

  get baseUrl() {
    return Cypress.config('baseUrl');
  }

  assertHeader(): void {
    this.header.should('be.visible');
  }

  visit() {
    cy.visit('/');
    return this;
  }

  checkPrimaryButton() {
    this.primaryButton.should('have.text', 'Order now').click();
    cy.waitUntilElementInDOM(() => {
      this.primaryButton.click();
      return this.primaryButton;
    });
    cy.url().should('eq', `${this.baseUrl}/product/athletic-mens-walking-sneakers`);
    return this;
  }

  checkSecondaryButton() {
    this.secondaryButton.should('have.text', 'Show more').click();
    cy.url().should('eq', `${this.baseUrl}/category`);
    return this;
  }

  checkCategoryCard() {
    this.categoryCard.should('be.visible');
    return this;
  }

  checkBanners() {
    this.banners.should('be.visible');

  }

  checkProductCard() {
    this.productCard.should('be.visible');
    return this;
  }

  checkHeaderCategory() {
    this.headerButton.should('have.text', 'Browse products').click();
    cy.url().should('eq', `${this.baseUrl}/category`);
    return this;
  }
}