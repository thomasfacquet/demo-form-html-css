/// <reference types="cypress" />

const { faker } = require("@faker-js/faker");

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const suggest = faker.random.alphaNumeric();

describe("fill automation tester survey", () => {
  it("I fill the survey with all informations", () => {
    cy.visit("index.html");
    cy.get("#lastName").type(lastName);
    //cy.get("#lastName").should("contain.text", lastName);
    cy.get("#firstName").type(firstName);
    cy.get("#email").type(email);
    cy.get('[type="text"]').type("45");
    cy.get("[value=cypress]").check({ force: true });
    cy.get("[name=level]").select("Moyen").should("have.value", "medium");
    cy.get("#suggestions").type(suggest);
  });
});

describe("clear automation tester survey", () => {
  it("I fill the survey with all informations", () => {
    cy.visit("index.html");
    cy.get("#lastName").type(lastName);
    cy.get("#firstName").type(firstName);
    cy.get("#email").type(email);
    cy.get('[type="text"]').type("45");
    cy.get("[value=cypress]").check({ force: true });
    cy.get("[name=level]").select("Moyen").should("have.value", "medium");
    cy.get("#suggestions").type(suggest);
    cy.visit("index.html");
    cy.get("#lastName").clear();
    cy.get("#firstName").clear();
    cy.get("#email").clear();
    cy.get('[type="text"]').clear();
    cy.get("[value=cypress]").uncheck({ force: true });
    cy.get("[name=level]").select("Facile").should("have.value", "low");
    cy.get("#suggestions").clear();
  });
});
