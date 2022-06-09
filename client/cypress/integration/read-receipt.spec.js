/// <reference types="cypress" />

const alice = {
  username: "Alice",
  email: "alice@example.com",
  password: "Z6#6%xfLTarZ9U",
};
const bob = {
  username: "Bob",
  email: "bob@example.com",
  password: "L%e$xZHC4QKP@F",
};

describe("Feature: Implement a read status for messages", () => {
  it("setup", () => {
    cy.signup(alice.username, alice.email, alice.password);
    cy.logout();
    cy.signup(bob.username, bob.email, bob.password);
    cy.logout();

    cy.login(alice.username, alice.password);
    cy.get("input[name=search]").type("Bob");
    cy.contains("Bob").click();

    cy.get("input[name=text]").type("First message{enter}");
    cy.get("input[name=text]").type("Second message{enter}");
    cy.get("input[name=text]").type("Third message{enter}");
  });

  it("displays correct number of new messages", () => {
    cy.login(bob.username, bob.password);

    cy.contains("Third message");
    cy.contains("3");

    cy.contains("Alice").click();
  });

  it("messages display read status", () => {
    cy.login(alice.username, alice.password);
    cy.contains("Bob").click();

    cy.contains("First message").then(() => {
      // Select the message list DOM by finding the closest common ancestor
      // between two messages.
      const $firstMessage = Cypress.$(':contains("First message")');
      const $secondMessage = Cypress.$(':contains("Second message")');
      const $list = $firstMessage.parents().has($secondMessage).first();
      
      cy.wrap($list).children().eq(0).find('svg').should("be.visible")
      cy.wrap($list).children().eq(1).find('svg').should("be.visible")
      cy.wrap($list).children().eq(2).find('svg').should("be.visible")
    });
  });
});
