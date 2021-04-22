describe("my-onboarding-app", () => {
	beforeEach(() => {
		//console.log(`random integer: ${Math.random()}`)
		cy.visit("http://localhost:3001");
	});

	// it represents the test
	it("sanity check", () => {
		expect(2 + 2).to.equal(4);
		expect(2 + 2).not.to.equal(5);
	});
	const nameInput = () => cy.get('[name="name"]');
	const emailInput = () => cy.get('[name="email"]');
	const passwordInput = () => cy.get('[name="password"]');
	const tosBox = () => cy.get('input[name="tos"]');
	const submitBtn = () => cy.get("button");

	it("Allows submission after completion", () => {
		const quote = "Dr. Slaughter";
		nameInput().type(quote).should("have.value", "Dr. Slaughter");

		const emailquote = "drslaughter@rex.com";
		emailInput().type(emailquote);
		const passwordquote = "Drslaughterbestdoc";
		passwordInput().type(passwordquote);

		tosBox().check();
		submitBtn().should("not.be.disabled");
		submitBtn().click();
	});

	it("Will show errors for invalid inputs", () => {
		nameInput().type("p");
		submitBtn().should("be.disabled");

		const emailquote = "NotSlaughter";
		emailInput().type(emailquote);
	});
});
